import React from 'react'
import FifthImage from '../../assets/MostFeaturedProducts-Imgs/Alpine-Lodge.png';
import {ProductDiv, ProductImg,  ProductName, ProductPieces, ProductBtn} from '../../styles/AllProductsPageStyles'

const FifthProduct = () => {
    return (
        <ProductDiv>  
                <ProductName>
                    Alpine Lodge
                </ProductName>

                <ProductImg  
                src={FifthImage}
                alt="Alpine Lodge">
                </ProductImg>

                <ProductPieces>
                    1517 Pieces
                </ProductPieces>

                <ProductBtn>
                    buy now
                </ProductBtn>

            </ProductDiv>
    );
}

export default FifthProduct;