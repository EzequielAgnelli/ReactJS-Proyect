import React from 'react'
import SecondProductImg from '../../assets/MostFeaturedProducts-Imgs/Flower.jpg';
import { ProductsDiv, ProductImg, ProductsInfoDiv, ProductName, ProductPieces, ProductsExclusiveDiv, ExclusiveTag, ProductBtn } from '../../styles/MostFeaturedStyles';

const SecondProduct = () => {
    return (
        <ProductsDiv>
                    <ProductsExclusiveDiv>
                        <ExclusiveTag>
                            New
                        </ExclusiveTag>
                    </ProductsExclusiveDiv>

            <ProductsInfoDiv>
                <ProductName>
                    Piranha Plant
                </ProductName>

            <ProductImg  
                src={SecondProductImg}
                alt="Piranha Plant (Super Mario Bros)">
            </ProductImg>

                <ProductPieces>
                    540 Pieces
                </ProductPieces>

                <ProductBtn>
                    Add to Cart
                </ProductBtn>
            </ProductsInfoDiv>
        </ProductsDiv>
    );
}

export default SecondProduct;
