import React from 'react';
import { HeroContainer, HeroDiv, HeroTitle, HeroParagraph, BtnDiv, HeroBtn } from '../styles/HeroStyles'


export function HeroSection() {
    return (
        <HeroContainer>
            <HeroDiv>
                <HeroTitle>
                    ¡Get your Favorite LEGO Set now!
                </HeroTitle>
                <HeroParagraph>
                    Get your most desired LEGO Set on sale
                </HeroParagraph>

            <BtnDiv>
                <HeroBtn>
                    Explore
                </HeroBtn>
            </BtnDiv>

            </HeroDiv>

        </HeroContainer>
    )
}