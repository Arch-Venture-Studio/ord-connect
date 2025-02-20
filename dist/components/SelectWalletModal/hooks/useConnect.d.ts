import { BitcoinNetworkType } from 'sats-connect';
import { Network, Wallet } from '../../../providers/OrdConnectProvider';

export declare const NETWORK_TO_BITCOIN_NETWORK_TYPE: Record<Network, BitcoinNetworkType>;
export declare function useConnect({ onClose, onError: onUserError, }: {
    onClose: () => void;
    onError: (err: string) => void;
}): {
    connectWallet: (wallet: Wallet, { readOnly }?: {
        readOnly?: boolean | undefined;
    }) => Promise<boolean>;
};
