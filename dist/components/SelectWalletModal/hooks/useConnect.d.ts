import { Wallet } from '../../../providers/OrdConnectProvider';

export declare function useConnect({ onClose, onError: onUserError, }: {
    onClose: () => void;
    onError: (err: string) => void;
}): {
    connectWallet: (wallet: Wallet, { readOnly }?: {
        readOnly?: boolean | undefined;
    }) => Promise<boolean>;
};
