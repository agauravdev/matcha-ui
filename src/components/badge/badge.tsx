import React, { ForwardRefRenderFunction } from 'react';
import { ReactNode } from 'react';
import { MainColors } from '../../config';
import StyledBadgeWrapper, { StyledBadge } from './badge.styled';
import CommonProps from '../../utils/commonProps';

export type BadgeProps = {
    content?: ReactNode;
    color?: MainColors;
    position?: 'top' | 'bottom';
    children: ReactNode;
} & CommonProps;

const Badge: ForwardRefRenderFunction<HTMLSpanElement, BadgeProps> = (
    props,
    ref
) => {
    const { content, color = 'primary', position = 'top', children } = props;
    return (
        <StyledBadgeWrapper
            ref={ref}
            color={color}
            style={props.style}
            className={props.className}
        >
            {children}
            <StyledBadge isDot={content == null} position={position}>
                {content}
            </StyledBadge>
        </StyledBadgeWrapper>
    );
};

export default React.forwardRef<HTMLSpanElement, BadgeProps>(Badge);
