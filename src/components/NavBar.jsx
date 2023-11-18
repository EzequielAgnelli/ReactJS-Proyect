import React from 'react';
import logo from '../assets/Navbar-Image/Lego-Logo.png';
import { Navbar, NavbarList, NavbarLinks, NavbarDiv, NavbarUl, Header, StyledLink, SecondStyledLink } from '../styles/NavBarStyles';
import { HiOutlineMenu } from "react-icons/hi";

export default function NavBar() {
return (
    <Header>
    <Navbar>

        <NavbarDiv>
        <img src={logo} alt="Lego Logo" />
        <SecondStyledLink to="">Lego Shop</SecondStyledLink>
        </NavbarDiv>

        <NavbarUl>   
            <HiOutlineMenu size="40" cursor="pointer"/>
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