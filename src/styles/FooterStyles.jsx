import styled from 'styled-components';

export const Foooter = styled.footer`
    background-color: #201D48;
    border-radius: 5px;
    width: 100%;
    padding: 20px; `

export const FooterA = styled.a`
    color: #ffffff;
    text-decoration: none;
    font-size: 20px;
    font-weight: bold; `

export const FooterHr = styled.hr`
    margin-top: 1.75rem;
    margin-bottom: 1.75rem;
    border: 1px solid #634e85; `

export const FooterP = styled.p`
    font-size: 17px;
    color: #fff;
    text-align: center;
    font-weight: bold;`

export const FooterUl = styled.ul`
    display: flex;
    align-items: center;
    justify-content: right;
    flex-wrap: wrap;
    font-weight: bold;
    gap: 10px; `

export const FooterLi = styled.li`
    color: white;
    cursor: pointer;
    list-style-type: none; 

    &:hover {
        text-decoration: underline;
    }`