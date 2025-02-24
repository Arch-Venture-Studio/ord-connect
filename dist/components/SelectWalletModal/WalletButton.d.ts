import { ReactNode } from 'react';
import { Wallet } from '../../providers/OrdConnectProvider';
export interface WalletButtonProps {
    wallet: Wallet;
    onConnect: () => Promise<boolean>;
    icon: string;
    renderAvatar?: (address: string, size: "large" | "small") => ReactNode;
    isPreferred?: boolean;
}
export declare function WalletButton({ wallet, onConnect, icon, renderAvatar, isPreferred, }: WalletButtonProps): import("react/jsx-runtime").JSX.Element;
