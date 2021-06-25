import React, { MutableRefObject } from 'react';
import { ForwardRefRenderFunction } from 'react';
import { ComponentSize } from '../../config/sizes';
import { MainColors } from '../../config/theme';
import { StyledAvatarImage, StyledAvatarText } from './avatar.styled';

export type AvatarProps =
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
      };

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
            />
        );
    else
        return (
            <StyledAvatarText
                bgColor={props.bgColor}
                ref={ref as MutableRefObject<HTMLDivElement>}
                size={props.size || 'md'}
            >
                {props.text}
            </StyledAvatarText>
        );
};
export default React.forwardRef<HTMLImageElement | HTMLDivElement, AvatarProps>(
    Avatar
);
