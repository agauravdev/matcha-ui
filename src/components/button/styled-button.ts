import styled, { css } from 'styled-components';
import { ComponentSize } from '../../config/sizes';
import { ButtonColor, ButtonVarient } from './button';
interface StyledButtonProps {
    buttonColor: ButtonColor;
    varient: ButtonVarient;
    size: ComponentSize;
    disabled: boolean;
    iconOnly: boolean;
}

const StyledButton = styled.button<StyledButtonProps>`
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;

    // ToDo add padding for icons here.. by using %{StyledIcon} {right-margin : 0.5rem}
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
    cursor: pointer;
    background-color: white;
    letter-spacing: 0.05rem;
    &:hover {
        background-color: ${(pr) => pr.theme[pr.buttonColor].hover};
    }
    &:active {
        background-color: ${(pr) => pr.theme[pr.buttonColor].active};
    }
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
        box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
        border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    ${(pr) => {
        if (pr.disabled) return;
        switch (pr.varient) {
            case 'contained':
                return css`
                    background-color: ${pr.theme[pr.buttonColor].main};
                    color: white;
                    box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
                        0px 2px 2px 0px rgb(0 0 0 / 14%),
                        0px 1px 5px 0px rgb(0 0 0 / 12%);
                    &:hover {
                        box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
                            0px 4px 5px 0px rgb(0 0 0 / 14%),
                            0px 1px 10px 0px rgb(0 0 0 / 12%);
                        background-color: ${pr.theme[pr.buttonColor].dark};
                    }
                    &:active {
                        box-shadow: 0px 5px 5px -3px rgb(0 0 0 / 20%),
                            0px 8px 10px 1px rgb(0 0 0 / 14%),
                            0px 3px 14px 2px rgb(0 0 0 / 12%);
                    }
                `;
            // <span class="MuiTouchRipple-ripple MuiTouchRipple-rippleVisible" style="width: 120.748px; height: 120.748px; top: -50.3738px; left: -34.3738px;"><span class="MuiTouchRipple-child"></span></span>
            case 'outlined':
                return css`
                    color: ${pr.theme[pr.buttonColor].main};
                    border: 1px solid ${pr.theme[pr.buttonColor].light};
                    &:hover {
                        border: 1px solid ${pr.theme[pr.buttonColor].main};
                    }
                `;

            case 'text':
                return css`
                    color: ${pr.theme[pr.buttonColor].main};
                    border: none;
                `;
            default:
                break;
        }
    }}
    ${(pr) =>
        pr.disabled &&
        css`
            background-color: ${pr.theme.disabledBackground};
            color: ${pr.theme.disabled};
        `}
    text-align: center;
    cursor: pointer;
    font-weight: 500;
`;

export default StyledButton;
