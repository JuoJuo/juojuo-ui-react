import React, { ButtonHTMLAttributes, PropsWithChildren } from "react";
import styled from "styled-components";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    primary?: boolean;
    backgroundColor?: string;
    size?: 'small' | 'medium' | 'large';
    label?: string;
    onClick?: () => void;
}

const Mybutton = styled.button({
    color: "red",
});

function Button(props: PropsWithChildren<ButtonProps>) {
    const { children, ...rest } = props;
    return <Mybutton {...rest}>{children}</Mybutton>;
}
export default Button;
