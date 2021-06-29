import React, { useEffect } from 'react';
import { StyledModal, StyledModalWrapper } from './modal.styled';

export type ModalProps = {
    open: boolean;
    onClose: () => void;
    closeIcon?: boolean;
    width?: string;
};

const Modal: React.FC<ModalProps> = (props) => {
    const { open, onClose, children, width } = props;

    useEffect(() => {
        if (open) {
            document.body.style.overflow = 'hidden';
        } else document.body.style.overflow = 'initial';
    }, [open]);

    if (!open) {
        return null;
    }
    return (
        <StyledModalWrapper onClick={onClose}>
            <StyledModal width={width} onClick={(e) => e.stopPropagation()}>
                {children}
            </StyledModal>
        </StyledModalWrapper>
    );
};
export default Modal;
