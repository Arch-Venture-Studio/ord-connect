import { ReactNode } from 'react';
import { Wallet } from '../../providers/OrdConnectProvider';
interface SelectWalletModalProps {
    isOpen: boolean;
    closeModal: () => void;
    renderAvatar?: (address: string, size: "large" | "small") => ReactNode;
    preferredWallet?: Wallet;
    walletsOrder?: Wallet[];
}
export declare function SelectWalletModal({ isOpen, closeModal, renderAvatar, preferredWallet, walletsOrder, }: SelectWalletModalProps): import("react/jsx-runtime").JSX.Element;
export {};
