import React from 'react'
import SecondProductImg from '../../assets/MostFeaturedProducts-Imgs/Imperial-TIE.png';
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
                    Imperial Tie
                </ProductName>

            <ProductImg  
                src={SecondProductImg}
                alt="Harry Potter and Hermione Granger (Harry Potter)">
            </ProductImg>

                <ProductPieces>
                    432 Pieces
                </ProductPieces>

                <ProductBtn>
                    Add to Cart
                </ProductBtn>
            </ProductsInfoDiv>
        </ProductsDiv>
    );
}

export default SecondProduct;
