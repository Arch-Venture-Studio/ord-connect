import { useEffect } from "react";
import { AddressPurpose, BitcoinNetworkType, request } from "sats-connect";
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

  const result: WalletAddress[] = [];

  const response = await request(
    "wallet_connect",
    {
      message: "Provide access to Payment address and Ordinals address",
      addresses: ["ordinals", "payment"] as AddressPurpose[],
    },
    "XverseProviders.BitcoinProvider",
  );

  if (response.status === "error") {
    throw new Error("Failed to connect to Xverse");
  }

  if (response.status === "success") {
    console.log("==>response", response.result);
    if (
      !response.result ||
      !response.result.addresses ||
      response.result.addresses.length !== 2
    ) {
      throw new BrowserWalletSigningError(
        "Failed to retrieve addresses using selected wallet",
      );
    }

    response.result.addresses.forEach((addressObj) => {
      console.log("==>format", "format");

      try {
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
      } catch (error) {
        if (network === Network.TESTNET) {
          throw new Error(
            `Wrong network type selected. To switch networks in Xverse wallet, go to Settings (⚙️) > click on Network > Switch to Testnet4 and save your settings.`,
          );
        }

        throw new Error(
          `Wrong network type selected. To switch networks in Xverse wallet, go to Settings (⚙️) > click on Network > Switch to ${network} and save your settings.`,
        );
      }
    });
  }
  return result;
};

const WALLET_CHROME_EXTENSION_URL: Record<Wallet, string> = {
  [Wallet.OKX]: "https://www.okx.com/web3",
  [Wallet.MAGICEDEN]: "https://wallet.magiceden.io/",
  [Wallet.UNISAT]: "https://unisat.io/download", // their www subdomain doesn't work\  [Wallet.XVERSE]: "https://www.xverse.app/download",
  [Wallet.XVERSE]: "https://www.xverse.app/download",
  [Wallet.LEATHER]: "https://leather.io/install-extension",
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
      const rightNetwork =
        network === ("testnet4" as Network) ? "testnet" : network;
      const unisat = await getUnisatAddresses(rightNetwork, chain, {
        readOnly,
      });
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
    case Wallet.XVERSE: {
      const xverse = await getXverseAddresses(network);
      console.log("==>xverse", xverse);
      if (!xverse || xverse.length < 1) {
        throw new Error("Xverse via Ordit returned no addresses");
      }

      // Xverse provides a nested segwit address by default for sending and receiving payments
      // Ledger wallets on Xverse will return a native segwit address for payments instead
      const paymentsAddress = xverse.find(
        (walletAddress) =>
          walletAddress.format === "p2sh-p2wpkh" ||
          walletAddress.format === "segwit",
      );

      if (!paymentsAddress) {
        throw new Error(
          "Xverse via Ordit did not return a P2SH or Segwit address",
        );
      }

      const ordinalsAddress = xverse.find(
        (walletAddress) => walletAddress.format === "taproot",
      );

      if (!ordinalsAddress) {
        throw new Error("Xverse via Ordit did not return a Taproot address");
      }

      return {
        address: {
          ordinals: ordinalsAddress.address,
          payments: paymentsAddress.address,
        },
        publicKey: {
          ordinals: ordinalsAddress.publicKey,
          payments: paymentsAddress.publicKey,
        },
        format: {
          ordinals: ordinalsAddress.format,
          payments: paymentsAddress.format,
        },
      };
    }
    case Wallet.MAGICEDEN: {
      const magicEdenAddresses = await getMagicEdenAddress(network);
      if (!magicEdenAddresses || magicEdenAddresses.length < 1) {
        throw new Error("Magic Eden via Ordit returned no addresses");
      }

      // Magic Eden provides a segwit address by default for sending and receiving payments
      // Imported xverse wallets will return a p2sh address for payments by default instead
      const paymentsAddress = magicEdenAddresses.find(
        (walletAddress) =>
          walletAddress.format === "segwit" ||
          walletAddress.format === "p2sh-p2wpkh",
      );

      if (!paymentsAddress) {
        throw new Error(
          "Magic Eden via Ordit did not return a P2SH or Segwit address",
        );
      }

      const ordinalsAddress = magicEdenAddresses.find(
        (walletAddress) => walletAddress.format === "taproot",
      );

      if (!ordinalsAddress) {
        throw new Error(
          "Magic Eden via Ordit did not return a Taproot address",
        );
      }

      return {
        address: {
          ordinals: ordinalsAddress.address,
          payments: paymentsAddress.address,
        },
        publicKey: {
          ordinals: ordinalsAddress.publicKey,
          payments: paymentsAddress.publicKey,
        },
        format: {
          ordinals: ordinalsAddress.format,
          payments: paymentsAddress.format,
        },
      };
    }
    case Wallet.LEATHER: {
      const leather = await getLeatherAddresses(network);
      if (!leather || leather.length < 1) {
        throw new Error("Leather via Ordit returned no addresses");
      }

      const paymentsAddress = leather.find(
        (walletAddress) => walletAddress.format === "segwit",
      );
      if (!paymentsAddress) {
        throw new Error("Leather via Ordit did not return a Segwit address");
      }

      const ordinalsAddress = leather.find(
        (walletAddress) => walletAddress.format === "taproot",
      );
      if (!ordinalsAddress) {
        throw new Error("Leather via Ordit did not return a Taproot address");
      }

      return {
        address: {
          ordinals: ordinalsAddress.address,
          payments: paymentsAddress.address,
        },
        publicKey: {
          ordinals: ordinalsAddress.publicKey,
          payments: paymentsAddress.publicKey,
        },
        format: {
          ordinals: ordinalsAddress.format,
          payments: paymentsAddress.format,
        },
      };
    }
    case Wallet.OKX: {
      const okx = await getOKXAddresses(network);
      if (!okx || okx.length < 1) {
        throw new Error("OKX via Ordit returned no addresses");
      }

      const okxWallet = okx[0];
      return {
        address: {
          ordinals: okxWallet.address,
          payments: okxWallet.address,
        },
        publicKey: {
          ordinals: okxWallet.publicKey,
          payments: okxWallet.publicKey,
        },
        format: {
          ordinals: okxWallet.format,
          payments: okxWallet.format,
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
    updateTestnetAddress,
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

      if (network === Network.TESTNET || network === ("testnet4" as Network)) {
        updateTestnetAddress({
          ordinals: address.ordinals,
          payments: address.payments,
        });
      } else {
        updateAddress({
          ordinals: address.ordinals,
          payments: address.payments,
        });
      }

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
      console.log("===>err", err);
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
