import React from 'react';
import logo from '../assets/Navbar-Image/Lego-Logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Navbar, NavbarList, NavbarLinks, NavbarDiv, NavbarTitle, NavbarUl, Header, StyledLink } from '../styles/NavBarStyles';

export default function NavBar() {
return (
    <Header>
    <Navbar>
        <NavbarDiv>
        <img src={logo} alt="Lego Logo" />
        <NavbarTitle>Lego Shop</NavbarTitle>
        </NavbarDiv>

        <NavbarUl>
        <NavbarList>
            <NavbarLinks href="#videogame"> Purchase Now </NavbarLinks>
        </NavbarList>

        <NavbarList>
            <NavbarLinks href="#mostfeatured"> Discover </NavbarLinks>
        </NavbarList>

        <NavbarList>
        <StyledLink to="/contact">Contact</StyledLink>
        </NavbarList>

        <FontAwesomeIcon icon={faShoppingCart} size="lg" />
        </NavbarUl>
    </Navbar>
    </Header>
);
}