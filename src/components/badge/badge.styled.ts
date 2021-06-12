import styled, { css } from 'styled-components';
import { MainColors } from '../../config/theme';
import { Icon } from '../icon';

export type StyledBadgeWrapperProps = {
    color: MainColors;
};

export type StyledBadgeProps = {
    isDot: boolean;
    position: 'top' | 'bottom';
};

export const StyledBadge = styled.span<StyledBadgeProps>`
    min-width: ${(pr) => (pr.isDot ? '0.6rem' : '1.25rem')};
    height: ${(pr) => (pr.isDot ? '0.6rem' : '1.25rem')};
    z-index: 1;
    position: absolute;
    right: ${(pr) => (pr.isDot ? '0' : '-0.4rem')};

    ${(pr) => {
        return pr.position === 'top'
            ? css`
                  top: ${pr.isDot ? '0' : '-0.4rem'};
              `
            : css`
                  bottom: ${pr.isDot ? '0' : '-0.4rem'};
              `;
    }}

    display: flex;
    justify-content: center;
    align-items: center;
    background-color: blue;
    border-radius: 50%;
    font-size: 0.6rem;
`;

const StyledBadgeWrapper = styled.span<StyledBadgeWrapperProps>`
    position: relative;
    display: inline-flex;
    vertical-align: middle;
    & ${Icon} {
        font-size: 2rem;
        line-height: 75%;
    }
    & ${StyledBadge} {
        background-color: ${(pr) => pr.theme[pr.color].main};
        color: ${(pr) => pr.theme[pr.color].contrastText};
    }
`;

export default StyledBadgeWrapper;
