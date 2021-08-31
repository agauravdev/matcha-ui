import React, { CSSProperties, ElementType } from 'react';
import StyledCardRoot from './card.styled';
import styled from 'styled-components';
import { Property } from 'csstype';
import { MainColors } from '../../config';
import CommonProps from '../../utils/commonProps';

export type CardProps = {
    variant?: 'outlined' | 'elevated';
    style?: CSSProperties;
    horizontal?: boolean;
    minWidth?: number | string;
    maxWidth?: number | string;
    as?: ElementType;
} & CommonProps;

const Card: React.FC<CardProps> = (props) => {
    const {
        variant = 'elevated',
        style,
        minWidth = 16,
        maxWidth,
        horizontal = false,
        ...restProps
    } = props;

    const minWidthProp =
        typeof minWidth === 'string' ? minWidth : `${minWidth}rem`;

    const maxWidthProp =
        typeof maxWidth === 'string' ? maxWidth : `${maxWidth}rem`;

    return (
        <StyledCardRoot
            variant={variant}
            style={style}
            minWidth={minWidthProp}
            maxWidth={maxWidthProp}
            horizontal={horizontal}
            {...restProps}
        />
    );
};

export const CardContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 1rem;
    &:last-child {
        padding-bottom: 1.5rem;
    }
`;

export const CardActions = styled.div<{
    justifyContent?: Property.JustifyContent;
}>`
    display: flex;
    padding: 0.5rem;
    align-items: center;
    justify-content: ${(pr) => pr.justifyContent || 'space-around'};
`;

export const CardBadge = styled.span<{
    top?: number;
    left?: number;
    color?: MainColors;
}>`
    position: absolute;
    top: ${(pr) => pr.top || '1rem'};
    left: ${(pr) => pr.left || '0rem'};
    background-color: ${(pr) => pr.theme[pr.color || 'primary'].main};
    color: ${(pr) => pr.theme[pr.color || 'primary'].contrastText};
    z-index: 2;
    border-radius: 0.5rem;
    padding: 0.2rem 0.5rem;
`;

export default Card;
