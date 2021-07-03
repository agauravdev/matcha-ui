import styled, { css } from 'styled-components';

export type StyledGridProps =
    | {
          type: 'fractions';
          template: Number[];
          gap: number;
      }
    | {
          type: 'percentage';
          template: Number[];
          gap: number;
      }
    | {
          type: 'mixed';
          template: String[];
          gap: number;
      };

const StyledGrid = styled.div<StyledGridProps>`
    display: grid;
    gap: ${(pr) => pr.gap + 'rem'};
    margin: 0 auto;
    align-items: center;
    ${(pr) => {
        switch (pr.type) {
            case 'fractions':
                return css`
                    grid-template-columns: ${pr.template.join('fr ')}fr;
                `;

            case 'percentage':
                return css`
                    grid-template-columns: ${pr.template.join('% ')}%;
                `;

            case 'mixed':
                return css`
                    grid-template-columns: ${pr.template.join(' ')};
                `;
        }
    }}
`;

export default StyledGrid;
