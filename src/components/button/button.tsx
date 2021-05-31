/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {
  ForwardRefRenderFunction,
  MouseEventHandler,
  ElementType,
  ReactNode,
} from 'react';
import { ComponentSize } from '../../config/sizes';
import StyledButton from './styled-button';

export type ButtonColor = 'primary' | 'secondary' | 'danger';

export type ButtonVarient = 'contained' | 'text' | 'outlined';

interface BaseButtonProps {
  varient?: ButtonVarient;
  color?: ButtonColor;
  leftIcon?: ElementType;
  rightIcon?: ElementType;
  size?: ComponentSize;
  className?: string;
  children?: ReactNode;
  disabled?: boolean;
  loading?: boolean;
  loadingText?: string;
}

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
    varient = 'contained',
    leftIcon,
    rightIcon,
    size = 'md',
    className,
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
    varient,
    iconOnly: children == null,
  };

  // ToDo: Will I need loader style?

  const buttonBody = loading ? (
    <>
      {loadingText}
      {/* ToDo add spinner here */}
    </>
  ) : (
    <>
      {/* todo add styled icons here */}
      {children}
    </>
  );

  if (as && !disabled) {
    return (
      <StyledButton as={as} to={to} ref={ref} className={className} {...styles}>
        {buttonBody}
      </StyledButton>
    );
  }

  if (href && !disabled) {
    return (
      <StyledButton
        as="a"
        href={href}
        ref={ref as React.MutableRefObject<HTMLAnchorElement>}
        className={className}
        {...styles}
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
      ref={ref as React.MutableRefObject<HTMLButtonElement>}
      className={className}
      {...styles}
    >
      {buttonBody}
    </StyledButton>
  );
};

export default React.forwardRef<unknown, ButtonProps>(Button);
