import styled from 'styled-components';

export const Foooter = styled.footer`
    background-color: #201D48;
    width: 100%;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;`

export const FooterA = styled.a`
    color: #ffffff;
    text-decoration: none;
    font-size: 20px;
    margin-top: 5px;
    font-weight: bold;
    text-transform: uppercase;
    font-weight: 800;`

export const FooterHr = styled.hr`
    width: 100%;
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