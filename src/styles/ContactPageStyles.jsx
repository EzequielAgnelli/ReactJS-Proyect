import styled from 'styled-components';

export const Form = styled.form`
    padding: 30px;
    display: flex;
    justify-content: center;
    align-items: center; `

export const DivContainer = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    background-color: #bdb2b4;
    max-width: 1200px;
    border-radius: 8px; `

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
    border-radius: 8px; `

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
    padding: 10px; `

export const InputNames = styled.input`
    width: 50%;
    padding: 10px; `

export const InputEmail = styled.input.attrs({
    type: 'email',
})`
    width: 50%;
    padding: 10px; `

export const InputText = styled.textarea`
    width: 50%;
    height: 70px;
    padding: 10px;
    resize: none; `

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
    } `

export const EmptyDiv = styled.div``