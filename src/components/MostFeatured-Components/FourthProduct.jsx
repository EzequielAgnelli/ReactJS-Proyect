import React from 'react'
import SecondProductImg from '../../assets/MostFeaturedProducts-Imgs/Daily-Bugle.png';
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
                    Daily Bugle
                </ProductName>

            <ProductImg  
                src={SecondProductImg}
                alt="Daily Bugle (Spider-Man)">
            </ProductImg>

                <ProductPieces>
                    3772 Pieces
                </ProductPieces>

                <ProductBtn>
                    Add to Cart
                </ProductBtn>
            </ProductsInfoDiv>
        </ProductsDiv>
    );
}

export default SecondProduct;
