import React from 'react'
import ThirdImage from '../../assets/MostFeaturedProducts-Imgs/UpHouse.png';
import {ProductDiv, ProductImg,  ProductName, ProductPieces, ProductBtn} from '../../styles/AllProductsPageStyles'

const ThirdProduct = () => {
    return (
        <ProductDiv>  
                <ProductName>
                    Up House
                </ProductName>

                <ProductImg  
                src={ThirdImage}
                alt="Up House">
                </ProductImg>

                <ProductPieces>
                    598 Pieces
                </ProductPieces>

                <ProductBtn>
                    buy now
                </ProductBtn>

            </ProductDiv>
    );
}

export default ThirdProduct;