import styled, { css } from 'styled-components';
import { MainColors } from '../../config/theme';
import { Icon } from '../icon';

export type StyledAlertProps = {
    color: MainColors;
    variant: 'default' | 'filled' | 'outlined';
};

const StyledAlert = styled.div<StyledAlertProps>`
    border-radius: 0.25rem;
    border: none;
    color: ${(pr) => pr.theme[pr.color].darker60};
    ${(pr) => {
        switch (pr.variant) {
            case 'filled':
                return css`
                    background-color: ${pr.theme[pr.color].main};
                    color: white;
                `;
            case 'outlined':
                return css`
                    background-color: transparent;
                    border: 1px solid ${pr.theme[pr.color].main};
                `;
            default:
                return css`
                    background-color: ${pr.theme[pr.color].lighter90};
                `;
        }
    }}
    & ${Icon} {
        color: ${(pr) => pr.theme[pr.color].main};
        font-size: 1.3rem;
        opacity: 0.9;
        margin-right: 0.75rem;
        display: flex;
    }
    height: 3rem;
    display: flex;
    padding: 0.3rem 1rem;
    letter-spacing: 0.01rem;
    line-height: 1.5;
    font-size: 0.875rem;
    font-weight: 400;
    align-items: center;
`;

export const StyledAlertText = styled.div`
    align-items: center;
    padding-bottom: 0.05rem;
    display: flex;
`;

export default StyledAlert;
