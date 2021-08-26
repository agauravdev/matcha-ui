import React, { CSSProperties, useEffect } from 'react';
import StyledSnackbar from './snackbar.styled';

export type SnackbarProps = {
    open: boolean;
    timeout?: number;
    persistent?: boolean;
    onClose: () => void;
    position?: {
        vertical: 'top' | 'bottom';
        horizontal: 'left' | 'right' | 'center';
    };
    style?: CSSProperties;
};

const Snackbar: React.FC<SnackbarProps> = ({
    position,
    onClose,
    timeout,
    open,
    persistent,
    style,
    children,
}) => {
    useEffect(() => {
        if (!persistent) {
            const timer = setTimeout(onClose, timeout);
            return () => clearTimeout(timer);
        }
    }, [onClose, persistent, timeout]);

    if (!open) return null;
    return (
        <StyledSnackbar {...position} style={style}>
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
