import styled, { css } from 'styled-components';
import { ComponentSize, MainColors } from '../../config';
import { Icon } from '../icon';
import { ButtonVariant } from './button';

interface StyledButtonProps {
    buttonColor: MainColors;
    variant: ButtonVariant;
    size: ComponentSize;
    disabled: boolean;
    iconOnly: boolean;
}

const StyledButton = styled.button.attrs((pr) => ({
    disabled: pr.disabled,
}))<StyledButtonProps>`
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
    cursor: pointer;
    background-color: white;
    letter-spacing: 0.05rem;
    &:focus-visible {
        outline: none;
    }
    &:active {
        background-color: ${(pr) =>
            pr.disabled || pr.theme[pr.buttonColor].active};
    }
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
        box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
        border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    ${(pr) => {
        console.log(
            `1px solid ${
                pr.disabled ? pr.theme.disabled : pr.theme[pr.buttonColor].light
            };`
        );
        switch (pr.variant) {
            case 'contained':
                return css`
                    background-color: ${pr.disabled
                        ? pr.theme.disabledBackground
                        : pr.theme[pr.buttonColor].main};

                    color: white;

                    box-shadow: 0 3px 1px -2px rgb(0 0 0 / 20%),
                        0px 2px 2px 0px rgb(0 0 0 / 14%),
                        0px 1px 5px 0px rgb(0 0 0 / 12%);
                    ${pr.disabled
                        ? css`
                              &:hover {
                                  box-shadow: 0 2px 4px -1px rgb(0 0 0 / 20%),
                                      0px 4px 5px 0px rgb(0 0 0 / 14%),
                                      0px 1px 10px 0px rgb(0 0 0 / 12%);
                                  background-color: ${pr.theme[pr.buttonColor]
                                      .dark};
                              }

                              &:active,
                              &:focus-visible {
                                  box-shadow: 0 5px 5px -3px rgb(0 0 0 / 20%),
                                      0px 8px 10px 1px rgb(0 0 0 / 14%),
                                      0px 3px 14px 2px rgb(0 0 0 / 12%);
                              }
                          `
                        : null}
                `;
            case 'outlined':
                return css`
                    color: ${pr.theme[pr.buttonColor].main};

                    border: 1px solid
                        ${pr.disabled
                            ? pr.theme.disabled
                            : pr.theme[pr.buttonColor].light}!important;

                    &:hover,
                    &:focus-visible {
                        border: 1px solid ${pr.theme[pr.buttonColor].main};
                        background-color: ${pr.disabled ||
                        pr.theme[pr.buttonColor].hover};
                    }
                `;

            case 'text':
                return css`
                    color: ${pr.theme[pr.buttonColor].main};
                    border: none;

                    &:hover,
                    &:focus-visible {
                        text-decoration: ${pr.disabled ? 'underline' : null};
                        background-color: ${pr.disabled ||
                        pr.theme[pr.buttonColor].hover};
                    }
                `;
            default:
                break;
        }
    }}
    & ${Icon} {
        font-size: 1rem;
    }
    & ${Icon}:first-of-type {
        padding-right: 0.5rem;
    }
    & ${Icon}:last-of-type {
        padding-left: 0.5rem;
    }
    ${(pr) =>
        pr.disabled &&
        css`
            color: ${pr.theme.disabled};
            cursor: not-allowed;
            box-shadow: initial;
        `}
    text-align: center;
    font-weight: 500;
`;

export default StyledButton;
