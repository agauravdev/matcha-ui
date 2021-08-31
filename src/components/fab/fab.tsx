import React, { ForwardRefRenderFunction } from 'react';
import { ElementType, ReactNode } from 'react';
import styled from 'styled-components';
import { MainColors } from '../../config';
import { Button } from '../button';
import CommonProps from '../../utils/commonProps';

export type FabProps = {
    color?: MainColors;
    href?: string;
    children: ReactNode;
    as?: ElementType;
    to?: string;
} & CommonProps;

const StyledFab = styled(Button)`
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
`;

const Fab: ForwardRefRenderFunction<unknown, FabProps> = (props, ref) => {
    const { color, href, children, as, to } = props;
    return (
        <StyledFab
            color={color}
            href={href}
            as={as}
            to={to}
            ref={ref}
            style={props.style}
            className={props.className}
        >
            {children}
        </StyledFab>
    );
};

export default React.forwardRef<unknown, FabProps>(Fab);
