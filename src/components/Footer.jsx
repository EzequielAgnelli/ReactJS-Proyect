import React from "react";
import {Foooter, FooterA, FooterHr, FooterP, FooterUl, FooterLi} from '../styles/FooterStyles'

export function Footer() {
    return (
        <Foooter>
            <FooterA>
                Lego E-commerce
            </FooterA>
                <FooterUl>
                    <FooterLi>
                        About LEGO
                    </FooterLi>

                    <FooterLi>
                        General Help
                    </FooterLi>

                    <FooterLi>
                        Contact Us
                    </FooterLi>

                    <FooterLi>
                        Terms & Conditions
                    </FooterLi>
                </FooterUl>
            <FooterHr></FooterHr> 

            <FooterP>
                Made With love By Ezequiel 🌎
            </FooterP>
        </Foooter>
    )
}