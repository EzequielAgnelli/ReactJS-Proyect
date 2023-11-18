import React from 'react'
import image from '../../assets/MostFeaturedProducts-Imgs/Imperial-TIE.png';
import {ProductDiv, ProductImg,  ProductName, ProductPieces, ProductBtn} from '../../styles/AllProductsPageStyles'

const SeventhProduct = () => {
    return (
        <ProductDiv>  
                <ProductName>
                    Imperial TIE
                </ProductName>

                <ProductImg  
                src={image}
                alt="Imperial Tie (Star Wars)">
                </ProductImg>

                <ProductPieces>
                    432 Pieces
                </ProductPieces>

                <ProductBtn>
                    buy now
                </ProductBtn>

            </ProductDiv>
    );
}

export default SeventhProduct;