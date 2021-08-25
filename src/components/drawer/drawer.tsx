import React from 'react';
import StyledDrawer, { StyledDrawerRoot } from './drawer.styled';
import { Transition } from 'react-transition-group';

const duration = 3000;

const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
};

const transitionStyles = {
    entering: { opacity: 1, display: 'inherit' },
    entered: { opacity: 1, display: 'inherit' },
    exiting: { opacity: 0, display: 'none' },
    exited: { opacity: 0, display: 'none' },
};

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
    if ('persistent' in props && props.persistent)
        return (
            <StyledDrawer width={props.width}>{props.children}</StyledDrawer>
        );
    return (
        <Transition in={open} timeout={duration}>
            {(state) => (
                <StyledDrawerRoot
                    onClick={onClose}
                    style={{
                        ...defaultStyle,
                        // @ts-ignore
                        ...transitionStyles[state],
                    }}
                >
                    <StyledDrawer onClick={(e) => e.stopPropagation()}>
                        {props.children}
                    </StyledDrawer>
                </StyledDrawerRoot>
            )}
        </Transition>
    );
};
export default Drawer;
