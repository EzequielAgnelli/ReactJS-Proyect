import React from "react";
import AhsokaImg from '../assets/MostFeaturedProducts-Imgs/Ahsoka.jpg'
// import VenatorImg from '../assets/MostFeaturedProducts-Imgs/Venator.jpg'
import {FeaturedDiv, FeaturedContainer, ProductsDiv, ProductsInfoDiv, TitleSection, ProductImg, ProductName, ProductPieces, ProductsExclusiveDiv, ExclusiveTag} from '../styles/MostFeaturedStyles'

export function MostFeatured() {
    return (
        <FeaturedDiv>
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

            </FeaturedContainer>
        </FeaturedDiv>
    )
}