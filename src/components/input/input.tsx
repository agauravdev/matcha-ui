import React, { ForwardRefRenderFunction } from 'react';
import { ChangeEvent } from 'react';
import { MainColors } from '../../config/theme';
import StyledInput from './input.styled';

export type InputProps = {
    hoverColor?: string;
    focusColor?: MainColors;
    error?: boolean;
    placeholder?: string;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    value?: string;
    // ToDo: add these. Will need to make the parent component as a div.
    // startAdornment?: ReactNode | 'string';
    // endAdornment?: ReactNode | 'string';
};

const Input: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
    props,
    ref
) => {
    return <StyledInput {...props} />;
};
export default React.forwardRef<HTMLInputElement, InputProps>(Input);
