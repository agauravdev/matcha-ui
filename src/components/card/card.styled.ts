import styled from 'styled-components';

export type StyledCardRootProps = {
    variant: 'outlined' | 'elevated';
    minWidth: string;
    maxWidth?: string;
    horizontal: boolean;
};

const StyledCardRoot = styled.section<StyledCardRootProps>`
    display: ${(pr) => pr.horizontal && 'flex'};
    box-shadow: 0 3px 1px -2px rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 14%),
        0 1px 5px 0 rgb(0 0 0 / 12%);
    border-radius: 0.25rem;
    min-width: ${(pr) => pr.minWidth};
    max-width: ${(pr) => pr.maxWidth};
    position: relative;
    @media (max-width: ${(pr) => pr.theme.breakpoints.sm}px) {
        display: initial;
        width: 100%;
    }
`;

export default StyledCardRoot;
