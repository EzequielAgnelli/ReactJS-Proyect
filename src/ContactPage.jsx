import React from 'react'
import {DivContainer, DivParagraph, DivTitle, DivInformation, SecondParagraph, SecondDiv, InputNames, DivNamesForm, InputEmail, InputText, SubmitButton, Form, EmptyDiv, } from './styles/ContactPageStyles'
import {Footer} from './components/Footer'

export default function ContactPage() {
    return (
        <EmptyDiv>
    <Form>
            <DivContainer>
                <DivInformation>
                <DivTitle>Contact Us</DivTitle>
                <DivParagraph>Need to get in touch with us? You can fill out the form with your inquiry and we will get in touch with you asap!</DivParagraph>
                <SecondParagraph>LEGO®️ Support, from 8am to 10pm</SecondParagraph>
                </DivInformation>

            <SecondDiv>
                <DivNamesForm>
                    <InputNames placeholder="First Name"></InputNames>
                    <InputNames placeholder="Last Name"></InputNames> 
                    <InputEmail placeholder="Email"></InputEmail>
                    <InputText placeholder="Your Message"></InputText>
                </DivNamesForm>

                <SubmitButton>Send</SubmitButton>
            </SecondDiv>

            </DivContainer>
        </Form>

    <Footer />
    </EmptyDiv>
    )
}