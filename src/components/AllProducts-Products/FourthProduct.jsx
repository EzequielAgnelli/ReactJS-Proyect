import React from 'react'
import FourthImage from '../../assets/MostFeaturedProducts-Imgs/Jazz-Club.png';
import {ProductDiv, ProductImg,  ProductName, ProductPieces, ProductBtn} from '../../styles/AllProductsPageStyles'

const FourthProduct = () => {
    return (
        <ProductDiv>  
                <ProductName>
                    Jazz Club
                </ProductName>

                <ProductImg  
                src={FourthImage}
                alt="Jazz Club">
                </ProductImg>

                <ProductPieces>
                    2899 Pieces
                </ProductPieces>

                <ProductBtn>
                    buy now
                </ProductBtn>

            </ProductDiv>
    );
}

export default FourthProduct;