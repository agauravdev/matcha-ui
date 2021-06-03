import { ChangeEvent } from 'react';
import styled from 'styled-components';
import { MainColors } from '../../config/theme';

export type StyledInputProps = {
    hoverColor?: string;
    focusColor?: MainColors;
    error?: boolean;
    placeholder?: string;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    value?: string;
};

const StyledInput = styled.input.attrs(({ placeholder, value, onChange }) => ({
    placeholder,
    value,
    onChange,
}))<StyledInputProps>`
    border: 1px solid
        ${(pr) => (pr.error ? pr.theme.error.main : pr.theme.grey['300'])};
    padding: 0.75rem;
    border-radius: 0.25rem;
    height: 1rem;

    &:hover {
        border-color: ${(pr) => pr.hoverColor || pr.theme.grey['500']};
    }

    &:focus-visible {
        outline: none;
        border-color: ${(pr) =>
            pr.error
                ? pr.theme.error.main
                : pr.theme[pr.focusColor || 'primary'].light};
        border-width: 2px;
        margin: -1px;
    }
`;

export default StyledInput;
