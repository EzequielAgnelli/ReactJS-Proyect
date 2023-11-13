import styled from 'styled-components';
import group from '../assets/AboutUs-Image/the-LEGO-group.jpg'

export const ImageContainer = styled.div`
    background-image: url(${group});
    background-position: center;   
    background-size: cover;
    background-repeat: no-repeat;
    width: 1800px;
    height: 600px; `

export const AboutContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap; `

export const Title = styled.h1`
    color: #333;
    font-size: 2.5em;
    font-weight: 800; `

export const CardContainer = styled.div`
    display: flex;
    max-width: 1200px;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap; `

export const Card = styled.div`
    width: 300px;
    height: 200px;
    background-color: #FFD700;
    margin: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.13); 
    transition: transform 0.3s ease-in-out;
    cursor: pointer;
    
    &:hover {
        transform: scale(1.10);
    } `

export const CardTitle = styled.h2`
    color: #333; 
    font-size: 17px;
    text-align: center; `

export const TitleContainer = styled.div``

export const ExtraTitle = styled.h3`
    color: #333;
    font-size: 1.7em;
    text-align: center; `

export const SecondCardContainer = styled(CardContainer)`
    padding: 20px;`

