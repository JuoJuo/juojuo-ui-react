import React, { ButtonHTMLAttributes, PropsWithChildren } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    primary?: boolean;
    backgroundColor?: string;
    size?: 'small' | 'medium' | 'large';
    label?: string;
    onClick?: () => void;
}

function Button(props: PropsWithChildren<ButtonProps>) {
    const { children, ...rest } = props;
    return <button {...rest}>{children}</button>;
}
export default Button;
