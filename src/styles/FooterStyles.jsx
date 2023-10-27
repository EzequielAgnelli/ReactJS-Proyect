import styled from 'styled-components';

export const Foooter = styled.footer`
    background-color: #201D48;
    width: 100%;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    
    @media (max-width: 768px) {
        width: 100%;
    }; `

export const FooterA = styled.a`
    color: #ffffff;
    text-decoration: none;
    font-size: 20px;
    margin-top: 5px;
    font-weight: bold;
    text-transform: uppercase;
    font-weight: 800;
    
    @media (max-width: 768px) {
        width: 100%;
        text-align: center;
        align-items: center;
    }; `

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
    flex-wrap: wrap;
    font-weight: bold;
    gap: 10px; 
    
    @media (max-width: 768px) {
        display: flex;
        align-items: center;
        justify-content: center;
    }; `


export const FooterLi = styled.li`
    color: white;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
    
    @media (max-width: 768px) {
        padding: 0px;
        align-items: center;
    }; `