import React, { ForwardRefRenderFunction } from 'react';
import StyledImage from './image.styled';
import { Property } from 'csstype';
export type ImageProps = {
    rounded?: boolean;
    shadow?: boolean;
    objectFit?: Property.ObjectFit;
    src: string;
    alt: string;
    style: React.CSSProperties;
};

const Image: ForwardRefRenderFunction<unknown, ImageProps> = (props, ref) => {
    const { rounded = false, shadow, objectFit, ...restProps } = props;
    return (
        <StyledImage
            rounded={rounded}
            shadow={shadow}
            objectFit={objectFit}
            // ToDo fix this.
            ref={ref as any}
            {...restProps}
        />
    );
};
export default React.forwardRef<unknown, ImageProps>(Image);
