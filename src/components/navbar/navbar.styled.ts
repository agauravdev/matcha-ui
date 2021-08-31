import styled from 'styled-components';

export type StyledNavbarProps = {};

const StyledNavbar = styled.div<StyledNavbarProps>`
    display: flex;
    width: 100%;
    background-color: ${(pr) => pr.theme.primary.main};
    color: ${(pr) => pr.theme.info.contrastText};
    padding: 0 1.5rem;
    min-height: 4rem;
    align-items: center;
`;

export const StyledNavSearchWrapper = styled.div`
    position: relative;
    border-radius: 0.25rem;
    background-color: rgba(255, 255, 255, 0.15);
    &:hover {
        background-color: rgba(255, 255, 255, 0.25);
    }
    display: flex;
    align-items: center;
    margin-left: 0;
    width: 100%;
    @media (min-width: ${(pr) => pr.theme.breakpoints.xs}px) {
        width: auto;
    }
`;

export const StyledNavSearchInput = styled.input`
    background-color: transparent;
    color: ${(pr) => pr.theme.info.contrastText};
    border: none;
    outline: none;
    padding: 0.5rem;
    transition: width 300ms;
    width: 100%;
    @media (min-width: ${(pr) => pr.theme.breakpoints.xs}px) {
        width: 12ch;
    }
`;

export default StyledNavbar;
