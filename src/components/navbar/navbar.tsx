import React, { KeyboardEvent } from 'react';
import Navbar, {
    StyledNavSearchInput,
    StyledNavSearchWrapper,
} from './navbar.styled';
import { Icon } from '../icon';
import { MdSearch } from 'react-icons/all';
import { StyledComponentProps } from 'styled-components';
import CommonProps from '../../utils/commonProps';

export type NavbarProps = {};

export type NavSearchProps = {
    onSearch: Function;
    inputProps: StyledComponentProps<'input', any, {}, never>;
} & CommonProps;

// const Navbar: React.FC<NavbarProps> = (props) => {
//     return <StyledNavbar color="primary">{props.children}</StyledNavbar>;
// };

export const NavSearch = React.forwardRef<HTMLInputElement, NavSearchProps>(
    ({ onSearch, inputProps, ...restProps }, ref) => {
        return (
            <StyledNavSearchWrapper {...restProps}>
                <Icon
                    size={1.5}
                    onClick={() => onSearch()}
                    style={{ cursor: 'pointer', paddingLeft: '0.75rem' }}
                >
                    <MdSearch />
                </Icon>
                <StyledNavSearchInput
                    ref={ref}
                    onKeyUp={(event: KeyboardEvent<HTMLInputElement>) => {
                        if (event.key === 'Enter' && event.code === 'Enter')
                            onSearch();
                    }}
                    {...inputProps}
                />
            </StyledNavSearchWrapper>
        );
    }
);
export default Navbar;
