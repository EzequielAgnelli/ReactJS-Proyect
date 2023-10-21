import React from 'react'
import SecondProductImg from '../../assets/MostFeaturedProducts-Imgs/Imperial-TIE.png';
import { ProductsDiv, ProductImg, ProductsInfoDiv, ProductName, ProductPieces, ProductsExclusiveDiv, ExclusiveTag } from '../../styles/MostFeaturedStyles';

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
            </ProductsInfoDiv>
        </ProductsDiv>
    );
}

export default SecondProduct;
