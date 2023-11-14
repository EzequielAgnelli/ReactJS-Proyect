import React from 'react';
import logo from '../assets/Navbar-Image/Lego-Logo.png';
import { Navbar, NavbarList, NavbarLinks, NavbarDiv, NavbarTitle, NavbarUl, Header, StyledLink, SecondStyledLink } from '../styles/NavBarStyles';

export default function NavBar() {
return (
    <Header>
    <Navbar>
        <NavbarDiv>
        <img src={logo} alt="Lego Logo" />
        <SecondStyledLink to="">Lego Shop</SecondStyledLink>
        </NavbarDiv>

        <NavbarUl>
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