import React, { ForwardRefRenderFunction } from 'react';
import { ReactNode } from 'react';
import { MainColors } from '../../config/theme';
import StyledBadgeWrapper, { StyledBadge } from './badge.styled';

export type BadgeProps = {
    content?: ReactNode;
    color?: MainColors;
    position?: 'top' | 'bottom';
    children: ReactNode;
};

const Badge: ForwardRefRenderFunction<HTMLSpanElement, BadgeProps> = (
    props,
    ref
) => {
    const { content, color = 'primary', position = 'top', children } = props;
    return (
        <StyledBadgeWrapper ref={ref} color={color}>
            {children}
            <StyledBadge isDot={content == null} position={position}>
                {content}
            </StyledBadge>
        </StyledBadgeWrapper>
    );
};

export default React.forwardRef<HTMLSpanElement, BadgeProps>(Badge);
