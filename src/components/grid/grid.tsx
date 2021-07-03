import React from 'react';
import StyledGrid from './grid.styled';

export type GridProps =
    | {
          type: 'fractions';
          template: Number[];
          gap?: number;
      }
    | {
          type: 'percentage';
          template: Number[];
          gap?: number;
      }
    | {
          type: 'mixed';
          template: String[];
          gap?: number;
      };

const Grid: React.FC<GridProps> = (props) => {
    const { gap = 1.5, children, ...restProps } = props;

    return (
        <StyledGrid {...restProps} gap={gap}>
            {children}
        </StyledGrid>
    );
};
export default Grid;
