import styled from 'styled-components';
import { MainColors } from '../config/theme';

export type IconProps = {
    customColor?: string;
    color?: MainColors;
    colorVariant?: string;
    size?: number;
};

export const Icon = styled.span<IconProps>`
    font-size: ${(pr) => `${pr.size || 1}em`};
    line-height: 75%;
    display: inline-block;
    color: ${(pr) => {
        if (pr.customColor) return pr.customColor;
        else
            return pr.color
                ? pr.theme[pr.color][pr.colorVariant || 'main']
                : 'currentColor';
    }};
    & svg {
        color: currentColor;
    }
`;
