import { ReactNode } from 'react';
import { Wallet } from '../../providers/OrdConnectProvider';

interface SelectWalletModalProps {
    isOpen: boolean;
    closeModal: () => void;
    renderAvatar?: (address: string, size: "large" | "small") => ReactNode;
    preferredWallet?: Wallet;
    walletsOrder?: Wallet[];
    visibleWallets?: Wallet[];
}
export declare function SelectWalletModal({ isOpen, closeModal, renderAvatar, preferredWallet, walletsOrder, visibleWallets, }: SelectWalletModalProps): import("react/jsx-runtime").JSX.Element;
export {};
