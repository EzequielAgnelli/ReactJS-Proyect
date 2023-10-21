import React from 'react';
import logo from '../assets/Navbar-Image/Lego-Logo.png'
import { Navbar, NavbarList, NavbarLinks, NavbarDiv, NavbarTitle, NavbarUl, Header } from '../styles/NavBarStyles'


export default function NavBar() {
    return (
    <Header>
            <Navbar>
        <NavbarDiv>
            <img src={logo} alt="Lego Logo" />
                <NavbarTitle>
                    Lego Shop
                </NavbarTitle>
        </NavbarDiv>

        <NavbarUl>
            <NavbarList>
                <NavbarLinks a href="#"> Purchase Now </NavbarLinks>
            </NavbarList>

            <NavbarList>
                <NavbarLinks a href="#"> Discover </NavbarLinks>
            </NavbarList>

            <NavbarList>
                <NavbarLinks a href="#"> Help </NavbarLinks>
            </NavbarList>
        </NavbarUl>

        </Navbar>
    </Header>
    );
}
