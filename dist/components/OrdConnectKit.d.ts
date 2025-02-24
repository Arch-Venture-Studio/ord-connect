import { ReactNode } from 'react';
import { Wallet } from '../providers/OrdConnectProvider';
export interface OrdConnectKitProps {
    hideConnectButton?: boolean;
    onViewProfile?: () => void;
    onChangeWalletClick?: () => void;
    onDisconnectWalletClick?: () => void;
    renderAvatar?: (address: string, size: "large" | "small") => ReactNode;
    preferredWallet?: Wallet;
    walletsOrder?: Wallet[];
}
/**
 * Parent React component for OrdConnectKit, in the form of a button.
 *
 * @component
 * @param {Object} props - Props for the OrdConnectKit component.
 * @param {boolean} [props.hideConnectButton] - Hides the connect and connected status button.
 * @param {Function} [props.renderAvatar] - Render prop for rendering wallet profile avatar when connected.
 * @param {Function} [props.onViewProfile] - Callback function to handle clicking view wallet profile.
 * @param {Function} [props.onChangeWalletClick] - Callback function to handle clicking change wallet.
 * @param {Function} [props.onDisconnectWalletClick] - Callback function to handle clicking disconnect wallet.
 * @param {Wallet} [props.preferredWallet] - Displays "Preferred" label beside desired wallet.
 * @param {Wallet[]} [props.walletsOrder] - Customize wallets display order in select wallet pop up.
 * @returns {JSX.Element} OrdConnectKit React component.
 */
export declare function OrdConnectKit({ hideConnectButton, onViewProfile, onChangeWalletClick, onDisconnectWalletClick, renderAvatar, preferredWallet, walletsOrder, }: OrdConnectKitProps): import("react/jsx-runtime").JSX.Element;
