import React, { useEffect } from 'react';
import StyledSnackbar from './snackbar.styled';
import CommonProps from '../../utils/commonProps';

export type SnackbarProps = {
    open: boolean;
    timeout?: number;
    persistent?: boolean;
    onClose: () => void;
    position?: {
        vertical: 'top' | 'bottom';
        horizontal: 'left' | 'right' | 'center';
    };
} & CommonProps;

const Snackbar: React.FC<SnackbarProps> = ({
    position,
    onClose,
    timeout,
    open,
    persistent,
    style,
    children,
    className,
}) => {
    useEffect(() => {
        if (!persistent) {
            const timer = setTimeout(onClose, timeout);
            return () => clearTimeout(timer);
        }
    }, [onClose, persistent, timeout]);

    if (!open) return null;
    return (
        <StyledSnackbar {...position} style={style} className={className}>
            {children}
        </StyledSnackbar>
    );
};

Snackbar.defaultProps = {
    position: {
        vertical: 'bottom',
        horizontal: 'right',
    },
    timeout: 3000,
};

export default Snackbar;
