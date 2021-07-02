import React, {
    ChangeEventHandler,
    ForwardRefRenderFunction,
    ReactNode,
    useEffect,
    useState,
} from 'react';
import { ComponentSize } from '../../config/sizes';
import { MdStar } from 'react-icons/all';
import { MainColors } from '../../config/theme';
import { StyledRatingIcon } from './rating.styled';
import visuallyHidden from '../../utils/visuallyHiddenCss';
import styled from 'styled-components';

export type RatingProps = {
    value?: number;
    disabled?: boolean;
    icon?: boolean;
    max?: number;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    readOnly?: boolean;
    size?: ComponentSize;
    name: string;
    color?: MainColors;
};

type RatingItemProps = {
    isActive: boolean;
    setIsActive: () => void;
    filled: boolean;
    icon: ReactNode;
    value: number;
    name: string;
    checked: boolean;
    onChange?: ChangeEventHandler<HTMLInputElement>;
};

const HiddenInput = styled.input`
    ${visuallyHidden}
`;

const RatingItem: React.FC<RatingItemProps> = (props) => {
    const {
        setIsActive,
        isActive,
        filled,
        icon,
        value,
        name,
        checked,
        onChange,
    } = props;

    console.log(visuallyHidden);

    console.log({ isActive, filled });
    const [id] = useState(`matcha-${Math.round(Math.random() * 1e9)}`);
    return (
        <>
            <label htmlFor={id}>
                <StyledRatingIcon
                    active={isActive}
                    filled={filled}
                    color="primary"
                    onMouseMove={setIsActive}
                >
                    {icon}
                </StyledRatingIcon>
            </label>
            <HiddenInput
                type="radio"
                value={value}
                name={name}
                id={id}
                checked={checked}
                onChange={onChange}
            />
        </>
    );
};

const Rating: ForwardRefRenderFunction<HTMLSpanElement, RatingProps> = (
    props,
    ref
) => {
    const {
        value = 3,
        disabled = false,
        icon = <MdStar />,
        max = 7,
        readOnly = false,
        size = 'md',
        name,
        onChange,
    } = props;

    const [activeValue, setActiveValue] = useState(-1);
    const [defaultName] = useState(`matcha-${Math.round(Math.random() * 1e9)}`);

    useEffect(() => {
        console.log(activeValue);
    }, [activeValue]);

    return (
        <span ref={ref} onMouseOut={() => setActiveValue(-1)}>
            {Array.from(new Array(max)).map((_, index) => {
                return (
                    <RatingItem
                        isActive={activeValue === index + 1}
                        setIsActive={() => setActiveValue(index + 1)}
                        filled={
                            activeValue >= 0
                                ? index < activeValue
                                : index < value
                        }
                        icon={icon}
                        value={index + 1}
                        name={name || defaultName}
                        checked={value === index + 1}
                        onChange={onChange}
                    />
                );
            })}
        </span>
    );
};

export default React.forwardRef<HTMLSpanElement, RatingProps>(Rating);
