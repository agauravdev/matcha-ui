import styled from 'styled-components';
import { Icon } from '../icon';

export type StyledRatingProps = {};

const StyledRating = styled.div<StyledRatingProps>``;

export type StyledRatingIconProps = {
    active: boolean;
    filled: boolean;
};

export const StyledRatingIcon = styled(Icon)<StyledRatingIconProps>`
    transform: ${(pr) => pr.active && 'scale(1.5)'};
    transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    color: ${(pr) => pr.filled && 'red'};
`;
export default StyledRating;
