import React, { ReactNode, useEffect } from 'react';
import {
    StyledCloseIcon,
    StyledModal,
    StyledModalWrapper,
} from './modal.styled';
import { MdClose } from 'react-icons/all';
import CommonProps from '../../utils/commonProps';

export type ModalProps = {
    open: boolean;
    onClose: () => void;
    closeIcon?: ReactNode | 'none';
    width?: string;
} & CommonProps;

const Modal: React.FC<ModalProps> = (props) => {
    const { open, onClose, children, width, closeIcon = <MdClose /> } = props;

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
            <StyledModal
                width={width}
                onClick={(e) => e.stopPropagation()}
                style={props.style}
                className={props.className}
            >
                {closeIcon !== 'none' && (
                    <StyledCloseIcon onClick={onClose}>
                        {closeIcon}
                    </StyledCloseIcon>
                )}
                {children}
            </StyledModal>
        </StyledModalWrapper>
    );
};
export default Modal;
