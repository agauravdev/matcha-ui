import React from 'react';
import StyledDrawer, { StyledDrawerRoot } from './drawer.styled';

export type DrawerProps =
    | {
          open?: boolean;
          width?: number;
          onClose?: () => void;
      }
    | {
          persistent: true;
          width: number;
          open?: boolean;
          onClose?: () => void;
      };

const Drawer: React.FC<DrawerProps> = (props) => {
    const { open = true, onClose } = props;
    if (!open) return null;
    if ('persistent' in props && props.persistent)
        return (
            <StyledDrawer width={props.width}>{props.children}</StyledDrawer>
        );
    return (
        <StyledDrawerRoot onClick={onClose}>
            <StyledDrawer onClick={(e) => e.stopPropagation()}>
                {props.children}
            </StyledDrawer>
        </StyledDrawerRoot>
    );
};
export default Drawer;
