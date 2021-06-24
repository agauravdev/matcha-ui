import styled from 'styled-components';
import { Icon } from '../icon';

export type StyledListProps = {};

export type StyledListItemProps = {};

export type StyledListItemTextProps = {};

const StyledList = styled.ul<StyledListProps>`
    list-style: none;
    margin: 0;
    padding: 0;
`;

export const StyledListItem = styled.li<StyledListItemProps>`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    text-decoration: none;
    width: 100%;
    box-sizing: border-box;
    text-align: left;
    padding: 0.5rem 1rem;

    & ${Icon} {
        min-width: 2.5rem;
        color: ${(pr) => pr.theme.text.secondary};
        font-size: 1.5rem;
    }
`;

export const StyledListItemText = styled.div<StyledListItemTextProps>`
    margin: 0.4rem 0;
    flex: 1 1 auto;
    //Primary text
    & span {
        line-height: 1.5;
        letter-spacing: 0.01rem;
        display: block;
    }
    //Secondary text
    & p {
        font-size: 0.875rem;
        line-height: 1.43;
        letter-spacing: 0.01rem;
        color: ${(pr) => pr.theme.text.secondary};
        display: block;
    }
`;

export default StyledList;
