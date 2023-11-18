import React from 'react'
import SecondProductImg from '../../assets/MostFeaturedProducts-Imgs/AT-AT.jpg';
import { ProductsDiv, ProductImg, ProductsInfoDiv, ProductName, ProductPieces, ProductsExclusiveDiv, ExclusiveTag, ProductBtn } from '../../styles/MostFeaturedStyles';

const SecondProduct = () => {
    return (
        <ProductsDiv>
                    <ProductsExclusiveDiv>
                        <ExclusiveTag>
                            Hard to Find
                        </ExclusiveTag>
                    </ProductsExclusiveDiv>

            <ProductsInfoDiv>
                <ProductName>
                    AT-AT
                </ProductName>

            <ProductImg  
                src={SecondProductImg}
                alt="LEGO AT-AT (Star Wars)">
            </ProductImg>

                <ProductPieces>
                    6785 Pieces
                </ProductPieces>

                <ProductBtn>
                    Add to Cart
                </ProductBtn>
            </ProductsInfoDiv>
        </ProductsDiv>
    );
}

export default SecondProduct;
