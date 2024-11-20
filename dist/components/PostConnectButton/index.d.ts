import { ReactNode } from 'react';
interface PostConnectButtonProps {
    address: string;
    network: string;
    onViewProfile?: () => void;
    onChangeWallet?: () => void;
    onDisconnectWallet?: () => void;
    renderAvatar?: (address: string, size: "large" | "small") => ReactNode;
}
export declare function PostConnectButton({ address, network, onViewProfile, onChangeWallet, onDisconnectWallet, renderAvatar, }: PostConnectButtonProps): import("react/jsx-runtime").JSX.Element;
export {};
