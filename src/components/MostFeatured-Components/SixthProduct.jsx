import React from 'react'
import SecondProductImg from '../../assets/MostFeaturedProducts-Imgs/Flower.jpg';
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
                alt="Piranha Plant (Super Mario Bros)">
            </ProductImg>

            <ProductsInfoDiv>
                <ProductName>
                    Piranha Plant
                </ProductName>

                <ProductPieces>
                    540 Pieces
                </ProductPieces>
            </ProductsInfoDiv>
        </ProductsDiv>
    );
}

export default SecondProduct;
