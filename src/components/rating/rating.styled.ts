import styled from 'styled-components';
import { Icon } from '../icon';
import { MainColors } from '../../config/theme';

export type StyledRatingProps = {
    disabled: boolean;
    color: MainColors;
    focus: boolean;
};

const StyledRating = styled.span<StyledRatingProps>`
    color: ${(pr) =>
        pr.disabled
            ? pr.theme.disabled
            : pr.theme[pr.color]['main']} !important;
    font-size: 1.5rem;
    border: ${(pr) => pr.focus && `1px solid ${pr.theme.grey['500']}`};
`;

export type StyledRatingIconProps = {
    active: boolean;
};

export const StyledRatingIcon = styled(Icon)<StyledRatingIconProps>`
    transform: ${(pr) => pr.active && 'scale(1.2)'};
    transition: transform 150ms;
    color: inherit;
    font-size: inherit;
`;

export const StyledRatingItem = styled.div<{ focus: boolean }>`
    line-height: 75%;
    display: inline-block;
    border: ${(pr) => pr.focus && `1px solid ${pr.theme.grey['500']}`};
`;
export default StyledRating;
