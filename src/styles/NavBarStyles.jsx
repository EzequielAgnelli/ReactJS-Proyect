import React from 'react';
import styled from 'styled-components';

export const Header = styled.header`
    background-color: #ffdb4b; 
        & img {
        width: 75px;
        height: 75px;
    }`

export const Navbar = styled.nav`
    padding: 4px;
    display: flex;
    justify-content:space-between;
    align-items: center;
;`

export const NavbarUl = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0px 15px 0px 0px;`

export const NavbarList = styled.li`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 10px;
    gap: 10px;`

export const NavbarLinks = styled.a`
    text-decoration: none;
    color: black;
    font-size: 20px;
    font-weight: 800;`

export const NavbarDiv = styled.div`
    display: flex;
    margin-left: 10px;`

export const NavbarTitle = styled.h1`
    padding: 10px;
    margin-top: 15px;
    font-weight: 800;`
