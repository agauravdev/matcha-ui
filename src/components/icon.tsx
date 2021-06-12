import styled from 'styled-components';
import { MainColors } from '../config/theme';

type IconProps = {
    customColor?: string;
    color?: MainColors;
    colorVarient?: string;
};

export const Icon = styled.span<IconProps>`
    color: ${(pr) => {
        if (pr.customColor) return pr.customColor;
        else
            return pr.color
                ? pr.theme[pr.color][pr.colorVarient || 'main']
                : 'white';
    }};
`;
