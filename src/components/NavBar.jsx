import React from 'react';
import logo from '../assets/Navbar-Image/Lego-Logo.png';
import { Navbar, NavbarList, NavbarLinks, NavbarDiv, NavbarUl, Header, StyledLink, SecondStyledLink, MenuIcon, ExtraDiv } from '../styles/NavBarStyles';
import { HiOutlineMenu } from "react-icons/hi";
import { useAppContext } from '../Context/Context';

export default function NavBar() {
    const {isMenuOpen, toggleMenu} = useAppContext();

return (
        <Header>
            <Navbar>
                <NavbarDiv>
                    <img src={logo} alt="Lego Logo" />
                    <ExtraDiv>
                    <SecondStyledLink to="">Lego Shop</SecondStyledLink>
                    <MenuIcon size="40" cursor="pointer" onClick={toggleMenu} />
                    </ExtraDiv>
                </NavbarDiv>

                <NavbarUl isMenuOpen={isMenuOpen}>
                    <NavbarList>
                        <NavbarLinks href="#videogame"> Purchase Now </NavbarLinks>
                    </NavbarList>

                    <NavbarList>
                        <StyledLink to="/products"> Products </StyledLink>
                    </NavbarList>

                    <NavbarList>
                        <StyledLink to="/contact">Contact</StyledLink>
                    </NavbarList>

                    <NavbarList>
                        <StyledLink to="/about">About Us</StyledLink>
                    </NavbarList>
                </NavbarUl>
            </Navbar>
        </Header>
    );
}