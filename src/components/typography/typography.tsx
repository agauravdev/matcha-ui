import React, { ElementType, ForwardRefRenderFunction, ReactNode } from 'react';
import { MainColors } from '../../config';
import StyledTypography from './typography.styled';
import CommonProps from '../../utils/commonProps';

export type TypographyProps = {
    color?: MainColors | 'grey' | 'black';
    align?: 'center' | 'inherit' | 'justify' | 'left' | 'right';
    component?: ElementType;
    variant?:
        | 'p'
        | 'p-sm'
        | 'caption'
        | 'h1'
        | 'h2'
        | 'h3'
        | 'h4'
        | 'h5'
        | 'h6'
        | 'subtitle'
        | 'subtitle-bold';
    children: ReactNode;
} & CommonProps;

const Typography: ForwardRefRenderFunction<unknown, TypographyProps> = (
    props,
    ref
) => {
    const {
        color,
        align = 'left',
        component,
        variant = 'p',
        style: styleProp,
        children,
        ...restProps
    } = props;

    const componentMapping = {
        'p-sm': 'p',
        caption: 'span',
        subtitle: 'h6',
        'subtitle-bold': 'h6',
    };

    // if the result of componentMapping is null, then variant will be selected by default
    // @ts-ignore
    const asProp = component || componentMapping[variant] || variant;

    const styles = {
        align,
        color,
        variant,
    };

    return (
        <StyledTypography
            as={asProp}
            ref={ref}
            {...styles}
            {...restProps}
            style={styleProp}
        >
            {children}
        </StyledTypography>
    );
};

export default React.forwardRef<unknown, TypographyProps>(Typography);
