import styled from 'styled-components';

export const Header = styled.header`
    background-color: #FFD700; 
    width: 100%;
    padding: 5px;
    & img {
        display: flex;
        width: 75px;
        height: 75px;
    }

    @media (max-width: 768px) {
        padding: 10px;
        width: 100%;
        flex-direction: column;
    } `;

export const Navbar = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 768px) {
        flex-direction: column; 
    } `;

export const NavbarUl = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0px 15px 0px 0px; `

export const NavbarList = styled.li`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 10px; `

export const NavbarLinks = styled.a`
    text-decoration: none;
    color: black;
    font-size: 20px;
    font-weight: 800; `

export const NavbarDiv = styled.div`
    display: flex;
    align-items: center;
    margin-left: 10px;
    
    @media (max-width: 768px) {
        flex-direction: column; 
    } `


export const NavbarTitle = styled.h1`
    padding: 10px;
    font-size: 25px;
    font-weight: 800; `
