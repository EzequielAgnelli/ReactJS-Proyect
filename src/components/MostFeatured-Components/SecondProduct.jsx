import React from 'react'
import SecondProductImg from '../../assets/MostFeaturedProducts-Imgs/AT-AT.jpg';
import { ProductsDiv, ProductImg, ProductsInfoDiv, ProductName, ProductPieces, ProductsExclusiveDiv, ExclusiveTag } from '../../styles/MostFeaturedStyles';

const SecondProduct = () => {
    return (
        <ProductsDiv>
                    <ProductsExclusiveDiv>
                        <ExclusiveTag>
                            Hard to Find
                        </ExclusiveTag>
                    </ProductsExclusiveDiv>
            <ProductImg  
                src={SecondProductImg}
                alt="LEGO AT-AT (Star Wars)">
            </ProductImg>

            <ProductsInfoDiv>
                <ProductName>
                    AT-AT
                </ProductName>

                <ProductPieces>
                    6785 Pieces
                </ProductPieces>
            </ProductsInfoDiv>
        </ProductsDiv>
    );
}

export default SecondProduct;
