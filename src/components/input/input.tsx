import React, {
    CSSProperties,
    ForwardRefRenderFunction,
    ReactNode,
} from 'react';
import { ChangeEvent } from 'react';
import { MainColors } from '../../config/theme';
import {
    StyledAdornment,
    StyledInput,
    StyledHelperText,
    StyledInputWrapper,
} from './input.styled';

export type InputProps = {
    hoverColor?: string;
    focusColor?: MainColors;
    error?: boolean;
    helperText?: string;
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
        helperText,
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

    const baseDivStyle: CSSProperties = {
        display: 'inline-flex',
        flexDirection: 'column',
        verticalAlign: 'top',
        margin: '0.5rem',
    };

    return (
        <div style={baseDivStyle}>
            <StyledInputWrapper {...wrapperStyles}>
                {startAdornment && (
                    <StyledAdornment>{startAdornment}</StyledAdornment>
                )}
                <StyledInput {...inputProps} ref={ref} />
                {endAdornment && (
                    <StyledAdornment>{endAdornment}</StyledAdornment>
                )}
            </StyledInputWrapper>
            <StyledHelperText error={error}>{helperText}</StyledHelperText>
        </div>
    );
};
export default React.forwardRef<HTMLInputElement, InputProps>(Input);
