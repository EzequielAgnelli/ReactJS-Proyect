import DesktopImage from '../assets/Hero-Section-Imgs/01-Hero-Standard-LEGO.jpg'
import styled from 'styled-components';

export const HeroContainer = styled.div`
    width: 100%;
    padding: 0px 20px 35px 20px;
    display: flex;
    justify-content: center;
    align-items: center; 
    
    @media (max-width: 768px) {
        width: 100%;
        padding: 0px;
    }; `

export const HeroDiv = styled.div`
    background-image: url(${DesktopImage});
    background-position: center;   
    background-size: cover;
    background-repeat: no-repeat;
    width: 1600px;
    height: 500px; 
    
    @media (max-width: 768px) {
    width: 100%;
    text-align: left;
    align-items: left;
    }; `

export const HeroTitle = styled.h2`
    font-size: 30px;
    padding: 20px;
    margin: 70px 0px 0px 70px; `

export const HeroParagraph = styled.p`
    font-size: 20px;
    padding: 20px;
    font-weight: 600;
    margin: 0px 0px 0px 70px; 
    
    @media (max-width: 768px) {
        font-size: 19px;
        margin-left: 0px;
    }; `

export const BtnDiv = styled.div`
    padding: 20px;
    margin: 0px 0px 0px 70px; `

export const HeroBtn = styled.a`
    background-color: black;
    padding: 10px;
    color: #fff;
    font-size: 17px;
    font-weight: 800;
    cursor: pointer; 
    border-radius: 7px; 
    position: relative;

&::after {
    content: '->'; 
    margin-left: 5px; 
    }

&:hover {
    background-color: white;
    color: black;
    } `;





