import styled, { keyframes } from 'styled-components';
import image from '../assets/Hero-Section-Imgs/06-Hero-Standard-StarWars-LEGO.jpeg'
import secondimage from '../assets/Hero-Section-Imgs/968429.jpg'

export const HeroContainer = styled.div`
    width: 100%;
    padding: 0px 20px 0px 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: column;

    @media (max-width: 768px) {
        width: 100%;
        padding: 0px;
    }; 
    
    @media (max-width: 992px) {
        padding: 0px;
}; `

export const HeroDiv = styled.div`
    background-image: url(${image});
    background-position: center;   
    background-size: cover;
    background-repeat: no-repeat;
    width: 1600px;
    height: 500px; 

    @media (max-width: 360px) {
        width: 300px;
    };

    @media (max-width: 992px) {
        width: 805px;
    }; 

    @media (max-width: 768px) {
        background-image: url(${secondimage});
        width: 300px;
        height: 500px;
    }; 

    @media (max-width: 1024px) {
        width: 100%;
        padding: 0px;
    }; 

    @media (max-width: 1280px) {
        width: 100%;
    }; `

export const HeroExtraContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap; `

export const HeroExtraDiv = styled.div`
    background-color: rgba(31,32,36,.97);
    width: 430px;
    height: 400px;
    padding: 10px;
    margin: 5px;

    @media (max-width: 992px) {
        background-color: rgba(31, 32, 36, 0.801);
        width: 390px;
        height: 450px;
    }; 

    @media (max-width: 768px) {
        width: 380px;
        height: 390px;
        background-color: rgba(31, 32, 36, 0.801);
    };

    @media (max-width: 1024px) {

    }; 

    @media (max-width: 360px) {
        width: 380px;
    }; ` 

export const HeroExtraDetails = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #fff;
    padding: 10px;
    
    @media (max-width: 768px) {
        text-align: center;
    }; `

export const HeroExtraTitle = styled.h2`
    text-align: center;
    margin: 10px;
    
    @media (max-width: 768px) {
        font-size: 18px;
        text-align: center;
    };

    @media (max-width: 992px) {
        margin-left: 0px;
    }; `

export const HeroExtraParagraph = styled.p`
    font-size: 15px;
    font-weight: 800;
    margin-left: 15px; 
    
    @media (max-width: 992px) {
        font-size: 16px;
    }; `

export const HeroExtraSpan = styled.span`
    font-size: 13.5px;
    font-weight: 800;
    margin: 20px; 
    
    @media (max-width: 992px) {
        font-size: 15.5px;
    }; `

export const HeroExtraInfo = styled.p`
    font-size: 18px;
    font-weight: 800;
    margin: 5px; `

export const HeroExtraDivv = styled.div`
    padding: 10px;
    display: flex;
    flex-direction: column;
    color: #fff; 
    
    @media (max-width: 768px) {
        text-align: center;
    }; `

export const HeroExtraPrice = styled.h3`
    font-weight: 800;`

export const HeroExtraBtn = styled.button`
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
    } 
    
    @media (max-width: 768px) {
        justify-content: center;
        margin: 0 auto;
    }; `

export const ProductsTitle = styled.h1`
    text-align: center;
    text-transform: uppercase; 
    
    @media (max-width: 1280px) {
        width: 100%;
    }; `

export const ProductsContainer = styled.div`
    display: flex;
    gap: 70px;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding: 20px;
    background-color: #f9f9f9;
    
    @media (max-width: 768px) {
        flex-direction: column;
    }; `

export const ProductDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.233); 
    
    @media (max-width: 768px) {
        width: 350px;
}; `

export const ProductsInfoDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px; `

export const TitleSection = styled.h2`
    text-align: center;
    font-weight: 800;
    font-size: 24px; 
    padding: 0px 0px 20px 0px;`

const fadeIn = keyframes`
from {
    padding: 20px;
}
to {
    padding: 4px;
} `

export const ProductImg = styled.img`
    width: 370px;
    height: 460px;
    padding: 20px;
    transition: padding 0.3s ease-in;
    
    &:hover {
        cursor: pointer;
        animation: ${fadeIn} 0.3s ease-in;
        padding: 4px;
        transition: all;
    }
    
    @media (max-width: 360px) {
        width: 285px;
    }; `

export const ProductName = styled.h3`
    font-size: 22px; `

export const ProductPieces = styled.p`
    font-weight: 800;
    font-size: 18px;
    text-align: center;
    margin-bottom: 10px; `

export const ProductBtn = styled.button`
    padding: 10px;
    border: none;
    cursor: pointer;
    color: white;
    text-transform: uppercase;
    font-weight: 800;
    border-radius: 5px;
    margin-bottom: 10px;
    text-align: center;
    background-color: #FD8024;
    
    &:hover {
        background-color: #201D48;;
        color: #fff;
    }`
