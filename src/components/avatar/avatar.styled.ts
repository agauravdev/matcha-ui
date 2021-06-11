import styled from 'styled-components';
import { ComponentSize } from '../../config/sizes';
import { MainColors } from '../../config/theme';

export type StyledAvatarImageProps = {
    size: ComponentSize;
    src: string;
    alt: string;
};

export type StyledAvatarTextProps = {
    size: ComponentSize;
    bgColor: MainColors;
};

export const StyledAvatarImage = styled.img.attrs<StyledAvatarImageProps>(
    (pr) => ({
        src: pr.src,
        alt: pr.alt,
    })
)<StyledAvatarImageProps>`
    width: ${(pr) => pr.theme.componentSizes[pr.size]};
    height: ${(pr) => pr.theme.componentSizes[pr.size]};
    border-radius: 50%;
    object-fit: cover;
`;

export const StyledAvatarText = styled.div<StyledAvatarTextProps>`
    width: ${(pr) => pr.theme.componentSizes[pr.size]};
    height: ${(pr) => pr.theme.componentSizes[pr.size]};
    border-radius: 50%;
    background-color: ${(pr) => pr.theme[pr.bgColor].main};
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    // Find a better way to do this.
    font-size: ${(pr) => `${pr.theme.componentSizes[pr.size][0] / 2}rem`};
    font-weight: 300;
`;
