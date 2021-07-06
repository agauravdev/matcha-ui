import React, { ElementType, ForwardRefRenderFunction } from 'react';
import { MainColors } from '../../config/theme';
import StyledTypography from './typography.styled';

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
};

const Typography: ForwardRefRenderFunction<unknown, TypographyProps> = (
    props,
    ref
) => {
    const { color = 'grey', align = 'left', component, variant = 'p' } = props;

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
        <StyledTypography as={asProp} ref={ref} {...styles}>
            test
        </StyledTypography>
    );
};
export default React.forwardRef<unknown, TypographyProps>(Typography);
