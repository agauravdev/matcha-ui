import React, { ForwardRefRenderFunction } from 'react';
import { ElementType, ReactNode } from 'react';
import styled from 'styled-components';
import { MainColors } from '../../config/theme';
import Button from '../button';

export type FabProps = {
    color?: MainColors;
    href?: string;
    children: ReactNode;
    as?: ElementType;
    to?: string;
};

const StyledFab = styled(Button)`
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
`;

const Fab: ForwardRefRenderFunction<unknown, FabProps> = (props, ref) => {
    const { color, href, children, as, to } = props;
    return (
        <StyledFab color={color} href={href} as={as} to={to} ref={ref}>
            {children}
        </StyledFab>
    );
};

export default React.forwardRef<unknown, FabProps>(Fab);