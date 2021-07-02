import React, {
    ChangeEventHandler,
    ForwardRefRenderFunction,
    ReactNode,
    useCallback,
    useState,
} from 'react';
import { ComponentSize } from '../../config/sizes';
import { MdStar, MdStarBorder } from 'react-icons/all';
import { MainColors } from '../../config/theme';
import StyledRating, {
    StyledRatingIcon,
    StyledRatingItem,
} from './rating.styled';
import visuallyHidden from '../../utils/visuallyHiddenCss';
import styled from 'styled-components';

export type RatingProps = {
    value?: number | null;
    disabled?: boolean;
    filledIcon?: ReactNode;
    emptyIcon?: ReactNode;
    max?: number;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    readOnly?: boolean;
    size?: ComponentSize;
    name: string;
    color?: MainColors;
    clearValue?: () => void;
};

type RatingItemProps = {
    isActive: boolean;
    setIsActive?: () => void;
    filled: boolean;
    filledIcon: ReactNode;
    emptyIcon: ReactNode;
    value: number;
    name: string;
    checked: boolean;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    readOnly: boolean;
    id: string;
    clearValue?: () => void;
};

const HiddenInput = styled.input`
    ${visuallyHidden}
`;

const RatingItem: React.FC<RatingItemProps> = (props) => {
    const {
        setIsActive,
        isActive,
        filled,
        filledIcon,
        emptyIcon,
        value,
        name,
        checked,
        onChange,
        readOnly,
        id,
        clearValue,
    } = props;

    const [focus, setFocus] = useState(false);

    return (
        <StyledRatingItem focus={focus}>
            <label
                onMouseMove={setIsActive}
                htmlFor={`${id}-${value}`}
                style={{ display: 'inline-block', lineHeight: '75%' }}
            >
                <StyledRatingIcon active={isActive || focus}>
                    {filled ? filledIcon : emptyIcon}
                </StyledRatingIcon>
            </label>
            <HiddenInput
                type="radio"
                value={value}
                name={name}
                id={`${id}-${value}`}
                checked={checked}
                readOnly={readOnly}
                onChange={onChange}
                onClick={clearValue}
                onFocus={(e) => {
                    if (e.target.matches(':focus-visible')) setFocus(true);
                }}
                onBlur={() => {
                    setFocus(false);
                }}
            />
        </StyledRatingItem>
    );
};

const Rating: ForwardRefRenderFunction<HTMLSpanElement, RatingProps> = (
    props,
    ref
) => {
    const {
        color = 'primary',
        value = 0,
        disabled = false,
        filledIcon = <MdStar />,
        emptyIcon = <MdStarBorder />,
        max = 7,
        readOnly: readOnlyProp = false,
        size = 'md',
        name,
        onChange,
    } = props;

    const [activeValue, setActiveValue] = useState(-1);
    const [defaultName] = useState(`matcha-${Math.round(Math.random() * 1e9)}`);
    const [id] = useState(`matcha-${Math.round(Math.random() * 1e9)}`);
    const [focus, setFocus] = useState(false);

    const readOnly = disabled || readOnlyProp;
    const resetActiveValue = useCallback(() => {
        setActiveValue(-1);
    }, []);

    return (
        <StyledRating
            ref={ref}
            onMouseLeave={resetActiveValue}
            disabled={disabled}
            color={color}
            focus={focus}
        >
            {Array.from(new Array(max)).map((_, index) => {
                return (
                    <RatingItem
                        key={index}
                        isActive={readOnly ? false : activeValue === index + 1}
                        setIsActive={
                            readOnly
                                ? undefined
                                : () => setActiveValue(index + 1)
                        }
                        filled={
                            activeValue >= 0
                                ? index < activeValue
                                : !!value && index < value
                        }
                        emptyIcon={emptyIcon}
                        filledIcon={filledIcon}
                        value={index + 1}
                        name={name || defaultName}
                        checked={value === index + 1}
                        readOnly={readOnly}
                        onChange={readOnly ? undefined : onChange}
                        id={id}
                    />
                );
            })}
            {!readOnly && (
                <label>
                    <HiddenInput
                        value=""
                        id={`${id}-null`}
                        type="radio"
                        name={name || defaultName}
                        checked={value == null}
                        onChange={onChange}
                        onFocus={(e) => {
                            if (e.target.matches(':focus-visible'))
                                setFocus(true);
                        }}
                        onBlur={() => {
                            setFocus(false);
                        }}
                    />
                </label>
            )}
        </StyledRating>
    );
};

export default React.forwardRef<HTMLSpanElement, RatingProps>(Rating);
