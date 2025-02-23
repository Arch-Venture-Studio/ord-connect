import { useEffect } from "react";
import {
  AddressPurpose,
  BitcoinNetworkType,
  BitcoinProvider,
  getAddress,
  GetAddressOptions,
  GetAddressResponse,
} from "sats-connect";
import {
  BrowserWalletNotInstalledError,
  BrowserWalletRequestCancelledByUserError,
  BrowserWalletSigningError,
  getAddressFormat,
  OrditSDKError,
} from "@ordzaar/ordit-sdk";
import { getAddresses as getLeatherAddresses } from "@ordzaar/ordit-sdk/leather";
import { getAddresses as getMagicEdenAddress } from "@ordzaar/ordit-sdk/magiceden";
import {
  getAddresses as getOKXAddresses,
  WalletAddress,
} from "@ordzaar/ordit-sdk/okx";
import { getAddresses as getUnisatAddresses } from "@ordzaar/ordit-sdk/unisat";

import {
  BiAddressFormat,
  BiAddressString,
  Chain,
  Network,
  useOrdConnect,
  Wallet,
} from "../../../providers/OrdConnectProvider";
import { waitForUnisatExtensionReady } from "../../../utils/unisat";

export const NETWORK_TO_BITCOIN_NETWORK_TYPE: Record<
  Network,
  BitcoinNetworkType
> = {
  mainnet: BitcoinNetworkType.Mainnet,
  testnet: BitcoinNetworkType.Testnet,
  signet: BitcoinNetworkType.Signet,
} as const;

type ConnectedWalletType = {
  address: BiAddressString;
  publicKey: BiAddressString;
  format: BiAddressFormat;
};

const getXverseAddresses = async (
  network: Network,
): Promise<WalletAddress[]> => {
  if (typeof window === "undefined") {
    throw new OrditSDKError("Cannot call this function outside a browser");
  }
  const hasXverse =
    typeof window.XverseProviders?.BitcoinProvider !== "undefined";
  if (!hasXverse) {
    throw new BrowserWalletNotInstalledError("Xverse not installed");
  }
  const getProvider = async () =>
    window.XverseProviders!.BitcoinProvider! as BitcoinProvider;

  const result: WalletAddress[] = [];

  const options: GetAddressOptions = {
    payload: {
      purposes: ["ordinals", "payment"] as AddressPurpose[],
      message: "Provide access to Payment address and Ordinals address",
      network: {
        type:
          network === Network.TESTNET
            ? BitcoinNetworkType.Testnet4
            : NETWORK_TO_BITCOIN_NETWORK_TYPE[network],
      },
    },
    getProvider,
    onFinish: (response: GetAddressResponse) => {
      if (!response || !response.addresses || response.addresses.length !== 2) {
        throw new BrowserWalletSigningError(
          "Failed to retrieve addresses using selected wallet",
        );
      }

      response.addresses.forEach((addressObj) => {
        const format = getAddressFormat(addressObj.address, network);

        let fullPubKey = addressObj.publicKey;
        if (format === "taproot") {
          // For taproot addresses, sats-connect returns the x-only public key.
          const xOnlyBuffer = Buffer.from(addressObj.publicKey, "hex");
          fullPubKey =
            xOnlyBuffer.length === 33 ? fullPubKey : `02${fullPubKey}`;
        }

        result.push({
          publicKey: fullPubKey,
          address: addressObj.address,
          format,
        });
      });
    },
    onCancel: () => {
      throw new BrowserWalletRequestCancelledByUserError();
    },
  };

  await getAddress(options);

  return result;
};

const WALLET_CHROME_EXTENSION_URL: Record<Wallet, string> = {
  [Wallet.UNISAT]: "https://unisat.io/download", // their www subdomain doesn't work
};

const connectWallet = async (
  {
    network,
    wallet,
    chain = Chain.BITCOIN,
  }: { network: Network; wallet: string; chain?: Chain },
  { readOnly = false } = {},
): Promise<ConnectedWalletType> => {
  switch (wallet) {
    case Wallet.UNISAT: {
      const unisat = await getUnisatAddresses(network, chain, { readOnly });
      if (!unisat || unisat.length < 1) {
        throw new Error("Unisat via Ordit returned no addresses");
      }

      const unisatWallet = unisat[0];
      return {
        address: {
          ordinals: unisatWallet.address,
          payments: unisatWallet.address,
        },
        publicKey: {
          ordinals: unisatWallet.publicKey,
          payments: unisatWallet.publicKey,
        },
        format: {
          ordinals: unisatWallet.format,
          payments: unisatWallet.format,
        },
      };
    }
    default:
      throw new Error("Invalid wallet");
  }
};

export function useConnect({
  onClose,
  onError: onUserError,
}: {
  onClose: () => void;
  onError: (err: string) => void;
}) {
  const {
    updateAddress,
    network,
    updateWallet,
    updatePublicKey,
    updateFormat,
    disconnectWallet,
    address: connectedAddress,
    publicKey: connectedPublicKey,
    format: connectedFormat,
    wallet: connectedWallet,
    chain,
  } = useOrdConnect();

  const onError = (
    walletProvider: Wallet,
    err:
      | BrowserWalletNotInstalledError
      | BrowserWalletRequestCancelledByUserError
      | Error,
  ) => {
    onUserError(err.message ?? err.toString());
    console.error(`Error while connecting to ${walletProvider} wallet`, err);
    disconnectWallet();

    if (err instanceof BrowserWalletNotInstalledError) {
      window.open(
        WALLET_CHROME_EXTENSION_URL[walletProvider],
        "_blank",
        "noopener,noreferrer",
      );
    }
  };

  const onConnect = async (wallet: Wallet, { readOnly = false } = {}) => {
    try {
      const { address, publicKey, format } = await connectWallet(
        { network, wallet, chain },
        { readOnly },
      );
      updateAddress({
        ordinals: address.ordinals,
        payments: address.payments,
      });
      updatePublicKey({
        ordinals: publicKey.ordinals,
        payments: publicKey.payments,
      });
      updateWallet(wallet);
      updateFormat({
        ordinals: format.ordinals,
        payments: format.payments,
      });
      onClose();
      return true;
    } catch (err) {
      onError(wallet, err as Error);
      return false;
    }
  };

  // Reconnect address change listener if a connected wallet exists
  useEffect(() => {
    if (connectedWallet !== Wallet.UNISAT) {
      return undefined;
    }

    let isMounted = true;
    let isConnectSuccessful = false;
    const listener = () => onConnect(Wallet.UNISAT);

    if (connectedAddress && connectedPublicKey && connectedFormat) {
      const connectToUnisatWalletOnReady = async () => {
        const isUnisatExtensionReady = await waitForUnisatExtensionReady();
        if (!isMounted) {
          return;
        }
        if (!isUnisatExtensionReady) {
          disconnectWallet();
          return;
        }

        isConnectSuccessful = await onConnect(Wallet.UNISAT, {
          readOnly: true,
        });
        if (!isMounted) {
          return;
        }

        if (isConnectSuccessful) {
          window.unisat.addListener("accountsChanged", listener);
        }
      };
      connectToUnisatWalletOnReady();
    }
    return () => {
      isMounted = false;
      if (isConnectSuccessful) {
        window.unisat.removeListener("accountsChanged", listener);
      }
    };
  }, [connectedWallet]);

  return { connectWallet: onConnect };
}
