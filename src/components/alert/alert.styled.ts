import styled, { css } from 'styled-components';
import { MainColors } from '../../config/theme';
import { Icon } from '../icon';

export type StyledAlertProps = {
    color: MainColors;
    varient: 'default' | 'filled' | 'outlined';
};

const StyledAlert = styled.div<StyledAlertProps>`
    border-radius: 0.25rem;
    border: none;
    color: ${(pr) => pr.theme[pr.color].darker60};
    ${(pr) => {
        switch (pr.varient) {
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
    // background-color:  pr.theme[pr.color].light};
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
    padding-bottom: 0.15rem;
`;

export default StyledAlert;
