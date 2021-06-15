import { forwardRef, ForwardRefRenderFunction, ReactNode } from 'react';
import { MainColors } from '../../config/theme';
import { Icon } from '../icon';
import StyledAlert, { StyledAlertText } from './alert.styled';

// ToDo Why does alert give an error when I add icon in alert.stories.tsx but goes away when i add children in alertprops
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
    const {
        color = 'primary',
        icon,
        variant = 'default',
        // action,
        children,
    } = props;

    return (
        <StyledAlert variant={variant} color={color} ref={ref}>
            {icon && <Icon>{icon}</Icon>}
            <StyledAlertText>{children}</StyledAlertText>
        </StyledAlert>
    );
};

export default forwardRef<HTMLDivElement, AlertProps>(Alert);
