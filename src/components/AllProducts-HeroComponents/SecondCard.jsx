import React from 'react'
import {HeroExtraDiv, HeroExtraDetails, HeroExtraTitle, HeroExtraParagraph, HeroExtraSpan, HeroExtraDivv, HeroExtraPrice, HeroExtraBtn, HeroExtraInfo} from '../../styles/AllProductsPageStyles'

const SecondCard = () => { 
return (
    <HeroExtraDiv>

    <HeroExtraDetails>
        <HeroExtraTitle>
        LEGO® Star Wars™ The Skywalker Saga - Deluxe Edition PS4 & PS5
        </HeroExtraTitle>

        <HeroExtraParagraph>
        WARNER BROS. INTERACTIVE
        </HeroExtraParagraph>

        <HeroExtraSpan>
        PS4, PS5, PC
        </HeroExtraSpan>

        <HeroExtraInfo>
        • Get 7 DLCs of playable Characters
        </HeroExtraInfo>
    </HeroExtraDetails>

    <HeroExtraDivv>
        <HeroExtraPrice>
        US$69.99
        </HeroExtraPrice>

        <HeroExtraBtn>
            buy now
        </HeroExtraBtn>
    </HeroExtraDivv>
    </HeroExtraDiv>
    )
}

export default SecondCard