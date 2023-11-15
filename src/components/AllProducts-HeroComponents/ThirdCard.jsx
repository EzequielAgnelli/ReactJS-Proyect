import React from 'react'
import {HeroExtraDiv, HeroExtraDetails, HeroExtraTitle, HeroExtraParagraph, HeroExtraSpan, HeroExtraDivv, HeroExtraPrice, HeroExtraBtn, HeroExtraInfo} from '../../styles/AllProductsPageStyles'

const ThirdCard = () => { 
return (
    <HeroExtraDiv>

    <HeroExtraDetails>
        <HeroExtraTitle>
        LEGO® Star Wars™ The Skywalker Saga - Galactic Edition PS4 & PS5
        </HeroExtraTitle>

        <HeroExtraParagraph>
        WARNER BROS. INTERACTIVE
        </HeroExtraParagraph>

        <HeroExtraSpan>
        PC, PS5, PC
        </HeroExtraSpan>

        <HeroExtraInfo>
        • Get all DLCs + Classic Obi-Wan Aspect
        </HeroExtraInfo>
    </HeroExtraDetails>

    <HeroExtraDivv>
        <HeroExtraPrice>
        US$79.99
        </HeroExtraPrice>

        <HeroExtraBtn>
            buy now
        </HeroExtraBtn>
    </HeroExtraDivv>
    </HeroExtraDiv>
    )
}

export default ThirdCard