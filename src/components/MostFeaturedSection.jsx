import React from "react";
import AhsokaImg from '../assets/MostFeaturedProducts-Imgs/Ahsoka.jpg'
import SecondProduct from './MostFeatured-Components/SecondProduct'
import ThirdProduct from './MostFeatured-Components/ThirdProduct'
import FourthProduct  from './MostFeatured-Components/FourthProduct'
import SixthProduct from './MostFeatured-Components/SixthProduct'
import FifthProduct from  './MostFeatured-Components/FifthProduct'
import {FeaturedDiv, FeaturedContainer, ProductsDiv, ProductsInfoDiv, TitleSection, ProductImg, ProductName, ProductPieces, ProductsExclusiveDiv, ExclusiveTag} from '../styles/MostFeaturedStyles'


export function MostFeatured() {
    return (
        <FeaturedDiv id="mostfeatured">
            <TitleSection>
                Most Featured Products
            </TitleSection>

            <FeaturedContainer>
                <ProductsDiv>
                    <ProductsExclusiveDiv>
                        <ExclusiveTag>
                            Exclusive
                        </ExclusiveTag>
                    </ProductsExclusiveDiv>

                    <ProductImg  
                        src={AhsokaImg}
                        alt="LEGO of Ahsoka (Star Wars)">
                    </ProductImg>

                    <ProductsInfoDiv>
                        <ProductName>
                            Ahsoka Tano
                        </ProductName>

                        <ProductPieces>
                            164 Pieces
                        </ProductPieces>

                    </ProductsInfoDiv>

                </ProductsDiv>
                    <SecondProduct />
                    <ThirdProduct />
                    <FourthProduct />
                    <SixthProduct />
                    <FifthProduct />
            </FeaturedContainer>
        </FeaturedDiv>
    )
}