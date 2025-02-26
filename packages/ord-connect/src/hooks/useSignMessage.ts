import { useCallback, useState } from "react";

import signMessage from "../lib/signMessage.ts";
import { Network, useOrdConnect } from "../providers/OrdConnectProvider";

export function useSignMessage(): {
  isLoading: boolean;
  signMsg: (address: string, message: string) => Promise<string | null>;
  error: string | null;
} {
  const {
    network,
    wallet,
    publicKey,
    format,
    address: walletAddresses,
    testnetAddress,
  } = useOrdConnect();
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const signMsg = useCallback(
    async (address: string, message: string) => {
      setIsLoading(true);

      try {
        setError(null);
        if (!format || !publicKey || !wallet) {
          throw new Error("No wallet is connected");
        }

        const signedAddress =
          network === Network.TESTNET || network === ("testnet4" as Network)
            ? testnetAddress
            : walletAddresses;

        if (
          signedAddress.ordinals !== address &&
          signedAddress.payments !== address
        ) {
          throw new Error("Address supplied is not connected address");
        }

        console.log("==>signedAddress", address, signedAddress);
        const signedMessage = await signMessage({
          address,
          wallet,
          message,
          network,
          format:
            signedAddress.ordinals === address
              ? format.ordinals!
              : format.payments!,
        });

        setIsLoading(false);
        return signedMessage;
      } catch (err) {
        console.log("==>err", err);
        setError((err as Error).message);
        setIsLoading(false);
        throw err;
      }
    },
    [format, network, publicKey, wallet, walletAddresses],
  );

  return { signMsg, error, isLoading };
}
