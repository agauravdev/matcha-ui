import React, { ForwardRefRenderFunction, ReactNode } from 'react';
import { ChangeEvent } from 'react';
import { MainColors } from '../../config/theme';
import {
    StyledAdornment,
    StyledInput,
    StyledInputWrapper,
} from './input.styled';

export type InputProps = {
    hoverColor?: string;
    focusColor?: MainColors;
    error?: boolean;
    placeholder?: string;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    value?: string;
    startAdornment?: ReactNode | 'string';
    endAdornment?: ReactNode | 'string';
};

const Input: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
    props,
    ref
) => {
    const {
        hoverColor,
        focusColor,
        error,
        placeholder,
        onChange,
        value,
        startAdornment,
        endAdornment,
    } = props;

    const wrapperStyles = {
        hoverColor,
        focusColor,
        error,
        startAdornment: !!startAdornment,
        endAdornment: !!endAdornment,
    };

    const inputProps = {
        placeholder,
        onChange,
        value,
    };

    return (
        <StyledInputWrapper {...wrapperStyles}>
            {startAdornment && (
                <StyledAdornment>{startAdornment}</StyledAdornment>
            )}
            <StyledInput {...inputProps} ref={ref} />
            {endAdornment && <StyledAdornment>{endAdornment}</StyledAdornment>}
        </StyledInputWrapper>
    );
};
export default React.forwardRef<HTMLInputElement, InputProps>(Input);
