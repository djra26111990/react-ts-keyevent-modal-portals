import { ReactChildren } from "react";

export interface IButtonProps {
    children: JSX.Element | ReactChildren | string;
    variant: 'contained' | 'outlined' | 'text' | undefined;
    color: 'primary' | 'secondary' | 'default' | undefined;
    handleClick: () => void;
}

export interface IPortalProps {
    id: string;
    children: JSX.Element | ReactChildren | string;
}

export interface IModalProps {
    isOpen: boolean;
    children: JSX.Element | ReactChildren | string;
    handleClose: () => void;
}

export interface IEventContext {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
    handleClick: () => void;
}