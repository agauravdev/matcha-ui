import React, { CSSProperties, ElementType } from 'react';
import StyledCardRoot from './card.styled';
import styled from 'styled-components';
import { Property } from 'csstype';

export type CardProps = {
    variant?: 'outlined' | 'elevated';
    style?: CSSProperties;
    minWidth?: number | string;
    as?: ElementType;
};

const Card: React.FC<CardProps> = (props) => {
    const { variant = 'elevated', style, minWidth = 16, ...restProps } = props;

    const minWidthProp =
        typeof minWidth === 'string' ? minWidth : `${minWidth}rem`;

    return (
        <StyledCardRoot
            variant={variant}
            style={style}
            minWidth={minWidthProp}
            {...restProps}
        />
    );
};

export const CardContent = styled.div`
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

export default Card;
