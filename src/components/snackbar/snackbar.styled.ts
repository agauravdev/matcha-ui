import styled, { css } from 'styled-components';

export type StyledSnackbarProps = {
    vertical?: 'top' | 'bottom';
    horizontal?: 'left' | 'right' | 'center';
};

const StyledSnackbar = styled.div<StyledSnackbarProps>`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    ${(pr) =>
        pr.vertical === 'top'
            ? css`
                  top: 1.5rem;
              `
            : css`
                  bottom: 1.5rem;
              `}
    ${(pr) =>
        pr.horizontal === 'center' &&
        css`
            left: 50%;
            right: auto;
            transform: translateX(-50%);
        `}
    ${(pr) =>
        pr.horizontal === 'left' &&
        css`
            left: 1.5rem;
            right: auto;
        `}
    ${(pr) =>
        pr.horizontal === 'right' &&
        css`
            right: 1.5rem;
            left: auto;
        `}
`;

export default StyledSnackbar;
