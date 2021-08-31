import styled from 'styled-components';
import { Icon } from '../icon';

export type StyledModalProps = {
    width?: string;
};

// ToDo: add some animation here for smooth popup of modal

export const StyledModalWrapper = styled.div`
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    background: ${(pr) => pr.theme.disabledBackground};
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const StyledModal = styled.div<StyledModalProps>`
    position: absolute;
    top: 50%;
    left: 50%;
    width: ${(pr) => pr.width};
    background: white;
    padding: 2rem;
    transform: translate(-50%, -50%);
    border-radius: 0.25rem;
    border: 1px solid black;
    box-shadow: rgb(0 0 0 / 20%) 0 11px 15px -7px,
        rgb(0 0 0 / 14%) 0px 24px 38px 3px, rgb(0 0 0 / 12%) 0px 9px 46px 8px;
`;

export const StyledCloseIcon = styled(Icon)`
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    cursor: pointer;
`;
