import styled, { css } from 'styled-components';
import { MainColors } from '../../config/theme';

export type StyledTypographyProps = {
    color: MainColors | 'grey' | 'black';
    align: 'center' | 'inherit' | 'justify' | 'left' | 'right';
    variant:
        | 'p'
        | 'p-sm'
        | 'caption'
        | 'h1'
        | 'h2'
        | 'h3'
        | 'h4'
        | 'h5'
        | 'h6'
        | 'subtitle'
        | 'subtitle-bold';
};

const styledPara = css`
    font-size: 1rem;
    letter-spacing: 0.01rem;
    font-weight: 400;
    line-height: 1.5;
`;

const styledParaSmall = css`
    font-size: 0.875rem;
    letter-spacing: 0.01rem;
    font-weight: 400;
    line-height: 1.4;
`;

const styledCaption = css`
    font-size: 0.75rem;
    letter-spacing: 0.033rem;
    font-weight: 400;
    line-height: 1.66;
`;

const styledH1 = css`
    font-size: 6rem;
    font-weight: 300;
    letter-spacing: -0.15rem;
    line-height: 1.16;
`;

const styledH2 = css`
    font-size: 3.75rem;
    font-weight: 300;
    letter-spacing: -0.008rem;
    line-height: 1.2;
`;

const styledH3 = css`
    font-size: 3rem;
    font-weight: 400;
    letter-spacing: 0;
    line-height: 1.16;
`;

const styledH4 = css`
    font-size: 2.125rem;
    font-weight: 400;
    letter-spacing: 0.007rem;
    line-height: 1.25;
`;

const styledH5 = css`
    font-size: 1.5rem;
    font-weight: 400;
    letter-spacing: 0;
    line-height: 1.35;
`;

const styledH6 = css`
    font-size: 1.25rem;
    font-weight: 500;
    letter-spacing: 0.0075rem;
    line-height: 1.6;
`;

const styledSubtitle = css`
    font-size: 1rem;
    font-weight: 400;
    letter-spacing: 0.01rem;
    line-height: 1.75;
`;

const styledSubtitleSmall = css`
    font-size: 0.875rem;
    font-weight: 500;
    letter-spacing: 0.007rem;
    line-height: 1.6;
`;

const variantMapping = {
    p: styledPara,
    'p-sm': styledParaSmall,
    caption: styledCaption,
    h1: styledH1,
    h2: styledH2,
    h3: styledH3,
    h4: styledH4,
    h5: styledH5,
    h6: styledH6,
    subtitle: styledSubtitle,
    'subtitle-bold': styledSubtitleSmall,
};

const StyledTypography = styled.div<StyledTypographyProps>`
    ${(pr) => variantMapping[pr.variant]};
    text-align: ${(pr) => pr.align};
    color: ${(pr) => {
        const { color } = pr;
        if (color === 'black') return 'black';
        if (color === 'grey') return pr.theme.text.secondary;
        return pr.theme[color].main;
    }};
`;

export default StyledTypography;
