import React from 'react'
import image from '../../assets/MostFeaturedProducts-Imgs/BookShop.png';
import {ProductDiv, ProductImg,  ProductName, ProductPieces, ProductBtn} from '../../styles/AllProductsPageStyles'

const SixthProduct = () => {
    return (
        <ProductDiv>  
                <ProductName>
                    Book Shop
                </ProductName>

                <ProductImg  
                src={image}
                alt="Book Shop">
                </ProductImg>

                <ProductPieces>
                    2504 Pieces
                </ProductPieces>

                <ProductBtn>
                    buy now
                </ProductBtn>

            </ProductDiv>
    );
}

export default SixthProduct;