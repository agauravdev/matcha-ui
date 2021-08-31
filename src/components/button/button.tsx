import React, {
    ForwardRefRenderFunction,
    MouseEventHandler,
    ElementType,
    ReactNode,
    MutableRefObject,
} from 'react';
import { MainColors, ComponentSize } from '../../config';
import { Icon, IconProps } from '../icon';
import StyledButton from './button.styled';
import CommonProps from '../../utils/commonProps';

export type ButtonVariant = 'contained' | 'text' | 'outlined';

type BaseButtonProps = {
    variant?: ButtonVariant;
    color?: MainColors;
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
    leftIconProps?: IconProps;
    rightIconProps?: IconProps;
    size?: ComponentSize;
    children?: ReactNode;
    disabled?: boolean;
    loading?: boolean;
    loadingText?: ReactNode;
} & CommonProps;

export interface HTMLButtonProps extends BaseButtonProps {
    onClick?: MouseEventHandler<HTMLElement>;
}

export interface LinkButtonProps extends BaseButtonProps {
    href?: string;
}

// For react router buttons
export interface CustomButtonProps extends BaseButtonProps {
    as?: ElementType;
    to?: string;
}

export type ButtonProps = HTMLButtonProps &
    LinkButtonProps &
    CustomButtonProps &
    BaseButtonProps;

const Button: ForwardRefRenderFunction<unknown, ButtonProps> = (props, ref) => {
    const {
        color = 'primary',
        variant = 'contained',
        leftIcon,
        rightIcon,
        leftIconProps,
        rightIconProps,
        size = 'md',
        children,
        disabled = false,
        loading = false,
        loadingText = 'Loading',
        onClick,
        href,
        as,
        to,
    } = props;

    const styles = {
        buttonColor: color,
        size,
        disabled: disabled || loading,
        variant,
        iconOnly: children == null,
    };

    const buttonBody = loading ? (
        loadingText
    ) : (
        <>
            {leftIcon && <Icon {...leftIconProps}>{leftIcon}</Icon>}
            {children}
            {rightIcon && <Icon {...rightIconProps}>{rightIcon}</Icon>}
        </>
    );

    if (as && !disabled) {
        return (
            <StyledButton
                as={as}
                to={to}
                ref={ref}
                {...styles}
                style={props.style}
                className={props.className}
            >
                {buttonBody}
            </StyledButton>
        );
    }

    if (href && !disabled) {
        return (
            <StyledButton
                as="a"
                href={href}
                ref={ref as MutableRefObject<HTMLAnchorElement>}
                {...styles}
                style={props.style}
                className={props.className}
            >
                {buttonBody}
            </StyledButton>
        );
    }

    return (
        <StyledButton
            as="button"
            type="button"
            onClick={onClick}
            ref={ref as MutableRefObject<HTMLButtonElement>}
            {...styles}
            style={props.style}
            className={props.className}
        >
            {buttonBody}
        </StyledButton>
    );
};

export default React.forwardRef<unknown, ButtonProps>(Button);
