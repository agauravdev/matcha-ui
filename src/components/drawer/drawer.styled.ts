import styled from 'styled-components';

export type StyledDrawerProps = {
    width?: number;
};

const StyledDrawer = styled.div<StyledDrawerProps>`
    width: ${(pr) => pr.width && pr.width + 'px'};
    padding-right: 1rem;
    background-color: white;
    display: flex;
    flex-direction: column;
    box-shadow: rgb(0 0 0 / 20%) 0 8px 10px -5px,
        rgb(0 0 0 / 14%) 0px 16px 24px 2px, rgb(0 0 0 / 12%) 0px 6px 30px 5px;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
`;

export const StyledDrawerRoot = styled.div`
    position: fixed;
    inset: 0;
    z-index: 90;
    background-color: ${(pr) => pr.theme.disabledBackground};
`;

export default StyledDrawer;
