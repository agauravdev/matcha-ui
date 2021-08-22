import React from 'react';
import StyledNavbar, {
    StyledNavSearchInput,
    StyledNavSearchWrapper,
} from './navbar.styled';
import { Icon } from '../icon';
import { MdSearch } from 'react-icons/all';

export type NavbarProps = {};

export type NavSearchProps = {
    onSearch: Function;
};

const Navbar: React.FC<NavbarProps> = (props) => {
    return <StyledNavbar color="primary">{props.children}</StyledNavbar>;
};

export const NavSearch = React.forwardRef<HTMLInputElement, NavSearchProps>(
    ({ onSearch }, ref) => {
        return (
            <StyledNavSearchWrapper>
                <Icon
                    size={1.5}
                    onClick={() => onSearch()}
                    style={{ cursor: 'pointer', paddingLeft: '0.75rem' }}
                >
                    <MdSearch />
                </Icon>
                <StyledNavSearchInput
                    ref={ref}
                    onKeyUp={(event) => {
                        if (event.key === 'Enter' && event.code === 'Enter')
                            onSearch();
                    }}
                />
            </StyledNavSearchWrapper>
        );
    }
);
export default Navbar;
