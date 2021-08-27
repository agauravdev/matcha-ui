import { forwardRef, ForwardRefRenderFunction, ReactNode } from 'react';
import { MainColors } from '../../config/theme';
import { Icon } from '../icon';
import StyledAlert, { StyledAlertText } from './alert.styled';

export type AlertProps = {
    color: MainColors;
    icon?: ReactNode;
    variant?: 'default' | 'filled' | 'outlined';
    action?: ReactNode;
    children: ReactNode;
};

const Alert: ForwardRefRenderFunction<HTMLDivElement, AlertProps> = (
    props,
    ref
) => {
    const { color = 'primary', icon, variant = 'default', children } = props;

    return (
        <StyledAlert variant={variant} color={color} ref={ref}>
            {icon && <Icon>{icon}</Icon>}
            <StyledAlertText>{children}</StyledAlertText>
        </StyledAlert>
    );
};

export default forwardRef<HTMLDivElement, AlertProps>(Alert);
