import React, { MutableRefObject } from 'react';
import { ForwardRefRenderFunction } from 'react';
import { ComponentSize } from '../../config';
import { MainColors } from '../../config';
import { StyledAvatarImage, StyledAvatarText } from './avatar.styled';
import CommonProps from '../../utils/commonProps';

export type AvatarProps =
    | (
          | {
                type: 'image';
                src: string;
                alt: string;
                size?: ComponentSize;
            }
          | {
                type: 'text';
                text: string;
                size?: ComponentSize;
                bgColor: MainColors;
            }
      ) &
          CommonProps;

const Avatar: ForwardRefRenderFunction<
    HTMLImageElement | HTMLDivElement,
    AvatarProps
> = (props, ref) => {
    if (props.type === 'image')
        return (
            <StyledAvatarImage
                src={props.src}
                alt={props.alt}
                size={props.size || 'sm'}
                ref={ref as MutableRefObject<HTMLImageElement>}
                style={props.style}
                className={props.className}
            />
        );
    else
        return (
            <StyledAvatarText
                bgColor={props.bgColor}
                ref={ref as MutableRefObject<HTMLDivElement>}
                size={props.size || 'md'}
                style={props.style}
                className={props.className}
            >
                {props.text}
            </StyledAvatarText>
        );
};
export default React.forwardRef<HTMLImageElement | HTMLDivElement, AvatarProps>(
    Avatar
);
