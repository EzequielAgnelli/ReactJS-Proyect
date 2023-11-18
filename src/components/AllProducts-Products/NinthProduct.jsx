import React from 'react'
import image from '../../assets/MostFeaturedProducts-Imgs/Daily-Bugle.png';
import {ProductDiv, ProductImg,  ProductName, ProductPieces, ProductBtn} from '../../styles/AllProductsPageStyles'

const NinthProduct = () => {
    return (
        <ProductDiv>  
                <ProductName>
                    Daily Bugle
                </ProductName>

                <ProductImg  
                src={image}
                alt="Daily Bugle (Spiderman)">
                </ProductImg>

                <ProductPieces>
                    3772 Pieces
                </ProductPieces>

                <ProductBtn>
                    buy now
                </ProductBtn>

            </ProductDiv>
    );
}

export default NinthProduct;