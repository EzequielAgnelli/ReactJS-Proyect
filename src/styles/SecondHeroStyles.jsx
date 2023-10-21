import secondDesktop from '../assets/Hero-Section-Imgs/03-Hero-Standard-LEGO.jpg'
import styled from 'styled-components';

export const HeroContainer = styled.div`
    width: 100%;
    padding: 0px 20px 15px 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; `

export const SecondTitle = styled.h2`
    text-align: center;
    margin-bottom: 20px;
    text-transform: uppercase;
    font-weight: 800; `

export const HeroDiv = styled.div`
    background-image: url(${secondDesktop});
    background-position: center;   
    background-size: cover;
    background-repeat: no-repeat;
    width: 1600px;
    height: 500px;
    position: relative; `

export const VideoGameDiv = styled.div`
    background-color: rgba(31,32,36,.97);
    width: 520px;
    height: 340px;
    position: absolute;
    left: 9%;
    top: 15%;
    transform: translateX(-20%); `

export const VideoGameDetailsDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #fff;
    padding: 10px;`

export const VideoGameTitle = styled.h2`
    text-align: center;
    margin: 20px; `

export const VideoGameParagraph = styled.p`
    color: #fff;
    font-size: 15px;
    font-weight: 800;
    margin-left: 15px; `

export const VideoGameSpan = styled.span`
    color: #fff;
    font-size: 13.5px;
    font-weight: 800;
    margin: 20px; `

export const VideoGamePurchaseDiv = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    color: #fff; `

export const VideoGamePrice = styled.h3`
    font-weight: 800;`

export const VideoGamePurchaseBtn = styled.button`
    background-color: #d63d00;
    color: white;
    border: none;
    width: 60%;
    padding: 10px;
    border-radius: 10px;
    margin-top: 10px;
    cursor: pointer;
    font-weight: 800;
    text-transform: uppercase; 

    &:hover {
        background-color: #b63401;
    } `
