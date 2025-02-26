import { request, RpcErrorCode } from "sats-connect";
import {
  AddressFormat,
  BrowserWalletRequestCancelledByUserError,
  BrowserWalletSigningError,
  OrditSDKError,
} from "@ordzaar/ordit-sdk";
import {
  LeatherAddressType,
  signMessage as signLeatherMessage,
} from "@ordzaar/ordit-sdk/leather";
import { signMessage as signMagicEdenMessage } from "@ordzaar/ordit-sdk/magiceden";
import {
  BrowserWalletSignResponse,
  signMessage as signOKXMessage,
} from "@ordzaar/ordit-sdk/okx";
import { signMessage as signUnisatMessage } from "@ordzaar/ordit-sdk/unisat";

import { Network, Wallet } from "../providers/OrdConnectProvider";

interface SignMessageParams {
  message: string;
  wallet: Wallet;
  address: string;
  network: Network;
  format: AddressFormat;
}

function leatherPaymentTypeFromFormat(
  format: AddressFormat,
): LeatherAddressType {
  if (format === "segwit") {
    return LeatherAddressType.P2WPKH;
  }
  if (format === "taproot") {
    return LeatherAddressType.P2TR;
  }
  throw new Error("Leather payment address format is not supported");
}

async function signXverseMessage(
  message: string,
  address: string,
  network: Network,
): Promise<BrowserWalletSignResponse> {
  if (!message || !network || !address) {
    throw new OrditSDKError("Invalid options provided");
  }

  let hex: string;
  let base64: string | null = null;

  const response = await request(
    "signMessage",
    {
      address,
      message,
    },
    "XverseProviders.BitcoinProvider",
  );

  console.log("xxxresponse", response);
  if (!response) {
    throw new BrowserWalletSigningError(
      "Failed to sign message using selected wallet",
    );
  }

  if (response.status === "success") {
    hex = Buffer.from(response.result.signature, "base64").toString("hex");
    base64 = response.result.signature;
  } else if (response.error.code === RpcErrorCode.USER_REJECTION) {
    throw new BrowserWalletRequestCancelledByUserError();
  } else {
    throw new Error("Failed to sign message");
  }

  // The Return is supplied by the await statement above, which extracts the hex and optional base64 from the response.
  // Hex is always returned, hence the not null assertion.
  // In cases where there is no hex, an error would be thrown by the handleOnFinish function.
  return { hex: hex!, base64 };
}

/**
 * Sign message
 *
 * @param options Options
 * @returns base64 signature
 */
export default async function signMessage({
  message,
  wallet,
  address,
  network,
  format,
}: SignMessageParams): Promise<string | null> {
  if (wallet === Wallet.MAGICEDEN) {
    const { base64 } = await signMagicEdenMessage(message, address, network);
    return base64;
  }

  if (wallet === Wallet.UNISAT) {
    const { base64 } = await signUnisatMessage(message, "bip322-simple");
    return base64;
  }

  if (wallet === Wallet.XVERSE) {
    const { base64 } = await signXverseMessage(message, address, network);
    return base64;
  }

  if (wallet === Wallet.LEATHER) {
    const paymentType = leatherPaymentTypeFromFormat(format);
    const { base64 } = await signLeatherMessage(message, {
      paymentType,
      network,
    });
    return base64;
  }

  if (wallet === Wallet.OKX) {
    const { base64 } = await signOKXMessage(message, "bip322-simple", network);
    return base64;
  }

  throw new Error("Invalid wallet selected");
}
