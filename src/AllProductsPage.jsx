import React from 'react'
import {HeroContainer, HeroDiv, HeroExtraDiv, HeroExtraDetails, HeroExtraTitle, HeroExtraParagraph, HeroExtraSpan, HeroExtraDivv, HeroExtraPrice, HeroExtraBtn,HeroExtraContainer, HeroExtraInfo, ProductsContainer, ProductDiv, ProductsInfoDiv, TitleSection, ProductImg,  ProductName, ProductPieces, ProductBtn, ProductsTitle} from './styles/AllProductsPageStyles'
import SecondCard from './components/AllProducts-HeroComponents/SecondCard'
import ThirdCard from './components/AllProducts-HeroComponents/ThirdCard'
import {Footer} from './components/Footer'
import SecondProduct from './components/AllProducts-Products/SecondProduct'
import ThirdProduct from './components/AllProducts-Products/ThirdProduct'
import FourthProduct from './components/AllProducts-Products/FourthProduct'
import FifthProduct from './components/AllProducts-Products/FifthProduct'
import SixthProduct from './components/AllProducts-Products/SixthProduct'
import SeventhProduct from './components/AllProducts-Products/SeventhProduct'
import EigthProduct from './components/AllProducts-Products/EigthProduct'
import NinthProduct from './components/AllProducts-Products/NinthProduct'
import Ahsoka from './assets/MostFeaturedProducts-Imgs/Ahsoka.jpg'

export default function ContactPage() {
    return (
        <HeroContainer>

            <HeroDiv></HeroDiv>

            <HeroExtraContainer>
                <HeroExtraDiv>

                <HeroExtraDetails>
                    <HeroExtraTitle>
                    LEGO® Star Wars™ The Skywalker Saga - Standard Edition PS4 & PS5
                    </HeroExtraTitle>

                    <HeroExtraParagraph>
                    WARNER BROS. INTERACTIVE
                    </HeroExtraParagraph>

                    <HeroExtraSpan>
                    PS4, PS5, PC
                    </HeroExtraSpan>

                    <HeroExtraInfo>
                    • Get the Classic Obi-Wan aspect
                    </HeroExtraInfo>
                </HeroExtraDetails>

                <HeroExtraDivv>
                    <HeroExtraPrice>
                    US$59.99
                    </HeroExtraPrice>

                    <HeroExtraBtn>
                        buy now
                    </HeroExtraBtn>
                </HeroExtraDivv>
                </HeroExtraDiv>

                <SecondCard />
                <ThirdCard />
            </HeroExtraContainer>

            <ProductsTitle>
                Visit all our products
            </ProductsTitle>

        <ProductsContainer>
            <ProductDiv>  
                <ProductName>
                    Ahsoka Tano
                </ProductName>

                <ProductImg  
                src={Ahsoka}
                alt="LEGO of Ahsoka (Star Wars)">
                </ProductImg>

                <ProductPieces>
                    164 Pieces
                </ProductPieces>

                <ProductBtn>
                    buy now
                </ProductBtn>

            </ProductDiv>
            <SecondProduct />
            <ThirdProduct />
            <FourthProduct />
            <FifthProduct />
            <SixthProduct />
            <SeventhProduct />
            <EigthProduct />
            <NinthProduct />
        </ProductsContainer>

            <Footer />
        </HeroContainer>
    )
}