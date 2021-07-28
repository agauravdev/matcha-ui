import styled from 'styled-components';
import { Property } from 'csstype';

export type StyledImageProps = {
    rounded: boolean;
    shadow?: boolean;
    objectFit?: Property.ObjectFit;
};

const StyledImage = styled.img<StyledImageProps>`
    border-radius: ${(pr) => pr.rounded && '50%'};
    object-fit: ${(pr) => pr.objectFit};
    box-shadow: ${(pr) =>
        pr.shadow &&
        `0 3px 1px -2px rgb(0 0 0 / 20%),
        0px 2px 2px 0px rgb(0 0 0 / 14%), 
        0px 1px 5px 0px rgb(0 0 0 / 12%)`};
    width: 100%;
`;

export default StyledImage;
