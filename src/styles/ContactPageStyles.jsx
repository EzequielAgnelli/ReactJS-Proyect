import styled from 'styled-components';

export const Form = styled.form`
    padding: 30px;
    display: flex;
    justify-content: center;
    align-items: center; 
    
    @media (max-width: 768px) {
        padding: 30px;
    }`

export const DivContainer = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    background-color: #bdb2b4;
    max-width: 1200px;
    border-radius: 8px; 
    
    @media (max-width: 768px) {
        width: 100%;
        display: flex;
        flex-direction: column;
    } `

export const DivInformation = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column; `

export const SecondDiv = styled.div`
    width: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #bdb2b4;
    height: 650px;
    border-radius: 8px;

    @media (max-width: 992px) {
        height: 850px;
    }

    @media (max-width: 768px) {
        height: 370px;
    } `

export const DivTitle = styled.h1`
    color: black;
    font-size: 35px;
    text-align: center; `

export const DivParagraph = styled.p`
    color: black;
    text-align: center;
    width: 80%;
    font-size: 18px; `

export const SecondParagraph = styled(DivParagraph)``

export const DivNamesForm = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center; 
    flex-direction: column;
    gap: 10px;
    padding: 10px;

    @media (max-width: 768px) {
        width: 100%;
        padding: 0px;
    } `

export const InputNames = styled.input`
    width: 50%;
    padding: 10px; 
    font-family: 'Assistant';
    
    @media (max-width: 768px) {
        width: 100%;
    } 
    
    @media (max-width: 992px) {
        width: 100%;
        font-size: 18px;
    } `

export const InputEmail = styled.input.attrs({
    type: 'email',
})`
    width: 50%;
    padding: 10px; 
    font-family: 'Assistant';
    
    @media (max-width: 768px) {
        width: 100%;
    }
    
    @media (max-width: 992px) {
        width: 100%;
        font-size: 18px;
    } `

export const InputText = styled.textarea`
    width: 50%;
    height: 70px;
    padding: 10px;
    resize: none; 
    
    @media (max-width: 768px) {
        width: 100%;
    }

    @media (max-width: 992px) {
        width: 100%;
        font-size: 18px;
    } `

export const SubmitButton = styled.button`
    padding: 10px;
    margin: 10px;
    width: 50%;
    cursor: pointer;
    font-weight: 800;
    text-transform: uppercase;
    background-color: #F47D20;
    border: none;
    border-radius: 7px;
    
    &:hover {
        background-color: #e77620;
    } 

    @media (max-width: 768px) {
        width: 100%;
    }
    
    @media (max-width: 992px) {
        width: 90%;
    } `

export const EmptyDiv = styled.div``