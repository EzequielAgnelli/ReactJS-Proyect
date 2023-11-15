import styled, { keyframes } from 'styled-components';

export const FeaturedDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column; 
    padding: 20px 30px; 
    width: 100%; `

export const FeaturedContainer = styled.div`
    display: flex;
    gap: 20px;
    justify-content: center;
    align-items: center;
    background-color: #f9f9f9; 
    max-width: 1200px;
    flex-wrap: wrap;
    padding: 20px;`

export const ProductsDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: right;
    justify-content: center;
    background-color: white;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.1); `

export const ProductsExclusiveDiv = styled.div`
    margin-top: 7px;
    padding: 5px;
    border-radius: 5px;
    color: black;
    font-weight: 800;
    text-align: right; `

export const ProductsInfoDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px; 
    flex-wrap: wrap;`

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
}
`;

export const ProductImg = styled.img`
    width: 340px;
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
        width: 250px;
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

export const ExclusiveTag = styled.span`
    padding: 5px;
    background-color: #F2F2F2;
    border-left: 2px solid orange;`