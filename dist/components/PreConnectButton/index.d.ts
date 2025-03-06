import { OrdConnectKitProps } from '../OrdConnectKit';

interface PreConnectButtonProps extends OrdConnectKitProps {
    openModal: () => void;
    disabled?: boolean;
}
export declare function PreConnectButton({ openModal, disabled, }: PreConnectButtonProps): import("react/jsx-runtime").JSX.Element;
export {};
