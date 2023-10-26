import React from 'react'
import {HeroContainer, HeroDiv, SecondTitle, VideoGameDiv, VideoGameDetailsDiv, VideoGameTitle, VideoGameParagraph, VideoGameSpan, VideoGamePurchaseDiv, VideoGamePrice, VideoGamePurchaseBtn} from '../styles/SecondHeroStyles'

export function SecondHeroSection() {
    return (
    <HeroContainer id="videogame">
        <SecondTitle>
        ¡Remember that we also sell videogames!
        </SecondTitle>

    <HeroDiv>
            <VideoGameDiv>
        <VideoGameDetailsDiv>

            <VideoGameTitle>
                The LEGO® Movie Videogame Bundle
            </VideoGameTitle> 

            <VideoGameParagraph>
                WARNER BROS. INTERACTIVE 
            </VideoGameParagraph>

            <VideoGameSpan>
                PC, PS5
            </VideoGameSpan>

        </VideoGameDetailsDiv>

        <VideoGamePurchaseDiv>
            <VideoGamePrice>
                $59.99
            </VideoGamePrice>
            <VideoGamePurchaseBtn>
                Buy Now
            </VideoGamePurchaseBtn>
        </VideoGamePurchaseDiv>
            </VideoGameDiv>

    </HeroDiv>
    </HeroContainer>
    )
}