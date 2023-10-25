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
            <ProductImg  
                src={SecondProductImg}
                alt="Harry Potter and Hermione Granger (Harry Potter)">
            </ProductImg>

            <ProductsInfoDiv>
                <ProductName>
                    Imperial Tie
                </ProductName>

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
