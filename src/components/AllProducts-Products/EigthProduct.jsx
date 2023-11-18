import React from 'react'
import image from '../../assets/MostFeaturedProducts-Imgs/Flower.jpg';
import {ProductDiv, ProductImg,  ProductName, ProductPieces, ProductBtn} from '../../styles/AllProductsPageStyles'

const EightProduct = () => {
    return (
        <ProductDiv>  
                <ProductName>
                    Piranha Plant
                </ProductName>

                <ProductImg  
                src={image}
                alt="Piranha (Mario Bros)">
                </ProductImg>

                <ProductPieces>
                    540 Pieces
                </ProductPieces>

                <ProductBtn>
                    buy now
                </ProductBtn>

            </ProductDiv>
    );
}

export default EightProduct;