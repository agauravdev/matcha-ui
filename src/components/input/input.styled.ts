import { ChangeEvent } from 'react';
import styled from 'styled-components';
import { MainColors } from '../../config/theme';
import { Icon } from '../icon';

export type StyledInputProps = {
    placeholder?: string;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    value?: string;
};

export type StyledInputWrapperProps = {
    hoverColor?: string;
    focusColor?: MainColors;
    error?: boolean;
    endAdornment?: boolean;
    startAdornment?: boolean;
};

export const StyledAdornment = styled.span`
    color: rgba(0, 0, 0, 0.6);
    font-size: inherit;
`;

export const StyledInputWrapper = styled.div<StyledInputWrapperProps>`
    display: inline-flex;
    align-items: center;
    padding-left: ${(pr) => pr.startAdornment && `0.8rem`};
    padding-right: ${(pr) => pr.endAdornment && `0.8rem`};
    border: 1px solid
        ${(pr) => (pr.error ? pr.theme.error.main : pr.theme.grey['300'])};
    border-radius: 0.25rem;

    & ${Icon} {
        padding-top: 0.2rem;
    }

    &:hover {
        border-color: ${(pr) =>
            pr.error
                ? pr.theme.error.main
                : pr.hoverColor || pr.theme.grey['500']};
    }

    &:focus-within {
        outline: none;
        border-color: ${(pr) =>
            pr.error
                ? pr.theme.error.main
                : pr.theme[pr.focusColor || 'primary'].light};
        border-width: 2px;
        margin: -1px;
    }
    font-weight: 400;
    font-size: 0.8rem;
`;

export const StyledInput = styled.input.attrs(
    ({ placeholder, value, onChange }) => ({
        placeholder,
        value,
        onChange,
    })
)<StyledInputProps>`
    border: none;
    border-radius: inherit;
    padding: 0.75rem;
    &:focus-visible {
        outline: transparent;
        border: none;
    }
    font: inherit;
`;

export const StyledHelperText = styled.p<{ error?: boolean }>`
    font-size: 0.75rem;
    line-height: 1.66;
    letter-spacing: 0.033rem;
    text-align: left;
    margin-top: 0.2rem;
    margin-left: 0.8rem;
    margin-right: 0.8rem;
    color: ${(pr) =>
        pr.error ? pr.theme.error.main : pr.theme.text.secondary};
`;
