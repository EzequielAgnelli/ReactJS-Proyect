import React from 'react';
import logo from '../assets/Navbar-Image/Lego-Logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faBars } from '@fortawesome/free-solid-svg-icons';
import { Navbar, NavbarList, NavbarLinks, NavbarDiv, NavbarTitle, NavbarUl, Header } from '../styles/NavBarStyles'


export default function NavBar() {
    return (
    <Header>
            <Navbar>

        <NavbarDiv>
            <img src={logo}alt="Lego Logo" />
                <NavbarTitle>
                    Lego Shop
                </NavbarTitle>
        </NavbarDiv>
                
        <NavbarUl>
        <FontAwesomeIcon icon={faBars} size="lg" />
            <NavbarList>
                <NavbarLinks> Purchase Now </NavbarLinks>
            </NavbarList>

            <NavbarList>
                <NavbarLinks> Discover </NavbarLinks>
            </NavbarList>

            <NavbarList>
                <NavbarLinks> Help </NavbarLinks>
            </NavbarList>

        <FontAwesomeIcon icon={faShoppingCart} size="lg"/>

        </NavbarUl>

        </Navbar>
    </Header>
    );
}
