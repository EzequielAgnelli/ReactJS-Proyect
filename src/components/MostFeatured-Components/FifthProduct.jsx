import React from 'react'
import SecondProductImg from '../../assets/MostFeaturedProducts-Imgs/City-Garden-NINJAGO.png';
import { ProductsDiv, ProductImg, ProductsInfoDiv, ProductName, ProductPieces, ProductsExclusiveDiv, ExclusiveTag, ProductBtn } from '../../styles/MostFeaturedStyles';

const SecondProduct = () => {
    return (
        <ProductsDiv>
                    <ProductsExclusiveDiv>
                        <ExclusiveTag>
                            Exclusive
                        </ExclusiveTag>
                    </ProductsExclusiveDiv>

            <ProductsInfoDiv>
                <ProductName>
                    Garden NINJAGO
                </ProductName>

            <ProductImg  
                src={SecondProductImg}
                alt="City Garden (NINJAGO)">
            </ProductImg>

                <ProductPieces>
                    5686 Pieces
                </ProductPieces>

                <ProductBtn>
                    Add to Cart
                </ProductBtn>
            </ProductsInfoDiv>
        </ProductsDiv>
    );
}

export default SecondProduct;
