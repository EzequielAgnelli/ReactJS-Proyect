import React from 'react'
import SecondProductImg from '../../assets/MostFeaturedProducts-Imgs/AT-AT.jpg';
import {ProductDiv, ProductImg,  ProductName, ProductPieces, ProductBtn} from '../../styles/AllProductsPageStyles'

const ThirdProduct = () => {
    return (
        <ProductDiv>  
                <ProductName>
                    Ahsoka Tano
                </ProductName>

                <ProductImg  
                src={SecondProductImg}
                alt="">
                </ProductImg>

                <ProductPieces>
                    164 Pieces
                </ProductPieces>

                <ProductBtn>
                    buy now
                </ProductBtn>

            </ProductDiv>
    );
}

export default ThirdProduct;