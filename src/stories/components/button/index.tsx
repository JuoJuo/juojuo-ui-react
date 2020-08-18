import React, {AnchorHTMLAttributes, ButtonHTMLAttributes, PropsWithChildren, ReactNode, useMemo} from 'react';
import { Text, Loading, StyledButton } from './css';

type btnType = 'primary' | 'primaryOutline' | 'secondary' | 'secondaryOutline' | 'tertiary' | 'outline' |
  'inversePrimary' | 'inverseSecondary' | 'inverseOutline';

type AppearancesObj = {
    [key in btnType]: key;
};

type sizeType = 'small' | 'medium';

type sizeObj = {
    [key in sizeType]: key;
};

export const APPEARANCES: AppearancesObj = {
    primary: 'primary',
    primaryOutline: 'primaryOutline',
    secondary: 'secondary',
    secondaryOutline: 'secondaryOutline',
    tertiary: 'tertiary',
    outline: 'outline',
    inversePrimary: 'inversePrimary',
    inverseSecondary: 'inverseSecondary',
    inverseOutline: 'inverseOutline',
};

export const SIZES: sizeObj = {
    small: 'small',
    medium: 'medium',
};

export type AppearancesTypes = keyof typeof APPEARANCES;
export type SizesTypes = keyof typeof SIZES;

export interface CustormButtonProps {
    /** 是否禁用 */
    disabled?: boolean;
    /** 是否加载中 */
    isLoading?: boolean;
    /** 是否是a标签 */
    isLink?: boolean;
    /** 是否替换加载中文本 */
    loadingText?: ReactNode;
    /** 按钮大小 */
    size?: SizesTypes;
    /** 按钮类型 */
    appearance?: AppearancesTypes;
    /** 无效点击 */
    isUnclickable?: boolean;
}

export type ButtonProps = CustormButtonProps & AnchorHTMLAttributes<HTMLAnchorElement> & ButtonHTMLAttributes<HTMLButtonElement>;

function Button(props: PropsWithChildren<ButtonProps>) {
    const { isLoading, loadingText, isLink, children } = props;
    const buttonInner = (
      <>
          <Text>{children}</Text>
          {isLoading && <Loading>{loadingText || 'Loading...'}</Loading>}
      </>
    );
    const btnType = useMemo(() => {
        if (isLink) {
            return 'a';
        }
    }, [isLink]);

    return (
      <StyledButton as={btnType} {...props}>
          {buttonInner}
      </StyledButton>
    );
}
Button.defaultProps = {
    isLoading: false,
    loadingText: null,
    isLink: false,
    appearance: APPEARANCES.tertiary,
    isDisabled: false,
    isUnclickable: false,
    containsIcon: false,
    size: SIZES.medium,
    ButtonWrapper: undefined,
};

export default Button;
