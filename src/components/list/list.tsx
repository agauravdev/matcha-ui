import StyledList, {
    StyledListItem,
    StyledListItemText,
    StyledListProps,
} from './list.styled';
import React, { ReactNode } from 'react';
import { Icon } from '../icon';

export type ListItemTextProps = {
    primary: string;
    secondary?: string;
};

export type ListItemProps = {
    icon?: ReactNode;
};

export const ListItemText: React.FC<ListItemTextProps> = ({
    primary,
    secondary,
}) => {
    return (
        <StyledListItemText>
            <span>{primary}</span>
            {!!secondary && <p>{secondary}</p>}
        </StyledListItemText>
    );
};

export const ListItem: React.FC<ListItemProps> = ({ icon, children }) => {
    return (
        <StyledListItem>
            <Icon>{icon}</Icon>
            {children}
        </StyledListItem>
    );
};

export { StyledList as List };
export type { StyledListProps as ListProps };
