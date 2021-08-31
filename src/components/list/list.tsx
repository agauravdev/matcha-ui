import StyledList, {
    StyledListItem,
    StyledListItemText,
    StyledListProps,
} from './list.styled';
import React, { ReactNode } from 'react';
import { Icon } from '../icon';
import { Avatar } from '../avatar';
import { AvatarProps } from '../avatar';
import CommonProps from '../../utils/commonProps';

export type ListItemTextProps = {
    primary: string;
    secondary?: string;
} & CommonProps;

export type ListItemProps =
    | (
          | {
                icon: ReactNode;
            }
          | {
                avatarProps: AvatarProps;
            }
          | {}
      ) &
          CommonProps;

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

export const ListItem: React.FC<ListItemProps> = (props) => {
    return (
        <StyledListItem
            borderBelow={'avatarProps' in props}
            style={props.style}
            className={props.className}
        >
            {'icon' in props && <Icon>{props.icon}</Icon>}
            {'avatarProps' in props && <Avatar {...props.avatarProps} />}
            {props.children}
        </StyledListItem>
    );
};

export { StyledList as List };
export type { StyledListProps as ListProps };
