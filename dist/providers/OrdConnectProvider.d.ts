import { PropsWithChildren } from 'react';
import { AddressFormat } from '@ordzaar/ordit-sdk';

export declare enum Network {
    MAINNET = "mainnet",
    TESTNET = "testnet",
    SIGNET = "signet"
}
export declare enum Wallet {
    UNISAT = "unisat",
    XVERSE = "xverse",
    MAGICEDEN = "magiceden",
    LEATHER = "leather",
    OKX = "okx"
}
export declare enum Chain {
    BITCOIN = "bitcoin",
    FRACTAL_BITCOIN = "fractal-bitcoin"
}
export interface BiAddress<T> {
    payments: T | null;
    ordinals: T | null;
}
export type BiAddressString = BiAddress<string>;
export type BiAddressFormat = BiAddress<AddressFormat>;
interface OrdConnectContextType {
    address: BiAddressString;
    updateAddress: (address: BiAddressString) => void;
    publicKey: BiAddressString;
    updatePublicKey: (publicKey: BiAddressString) => void;
    network: Network;
    updateNetwork: (network: Network) => void;
    wallet: Wallet | null;
    updateWallet: (wallet: Wallet | null) => void;
    isModalOpen: boolean;
    openModal: () => void;
    closeModal: () => void;
    format: BiAddressFormat;
    updateFormat: (format: BiAddressFormat) => void;
    disconnectWallet: () => void;
    chain: Chain;
    updateChain: (chain: Chain) => void;
    visibleWallets: Wallet[];
    updateVisibleWallets: (visibleWallets: Wallet[]) => void;
}
export type OrdConnectProviderProps = {
    network: Network;
    visibleWallets: Wallet[];
    chain?: Chain;
    ssr?: boolean;
};
/**
 * (Optionally) global context provider for OrdConnectKit and its consumer(s).
 *
 * @component
 * @example
 * // Usage:
 * // Wrap your application with the OrdConnectProvider to access the OrdContext.
 * // The provider manages the state and provides it to the child components.
 *
 * import { OrdConnectProvider } from "./OrdConnectProvider";
 *
 * function App() {
 *   return (
 *     <OrdConnectProvider>
 *       <YourAppContent />
 *     </OrdConnectProvider>
 *   );
 * }
 *
 * @param props - Props object.
 * @param props.network - Network.
 * @param props.chain - Chain.
 * @param props.ssr - Enable SSR.
 * @returns Provider component for OrdConnect.
 */
export declare function OrdConnectProvider({ children, network: _network, visibleWallets: _visibleWallets, chain: _chain, ssr, }: PropsWithChildren<OrdConnectProviderProps>): import("react/jsx-runtime").JSX.Element;
export declare function useOrdConnect(): OrdConnectContextType;
export {};
