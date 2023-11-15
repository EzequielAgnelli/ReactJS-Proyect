import React from 'react'
import SecondProductImg from '../../assets/MostFeaturedProducts-Imgs/AT-AT.jpg';
import {ProductDiv, ProductImg,  ProductName, ProductPieces, ProductBtn} from '../../styles/AllProductsPageStyles'

const SecondProduct = () => {
    return (
        <ProductDiv>  
                <ProductName>
                    AT-AT
                </ProductName>

                <ProductImg  
                src={SecondProductImg}
                alt="LEGO of AT-AT (Star Wars)">
                </ProductImg>

                <ProductPieces>
                6785 Pieces
                </ProductPieces>

                <ProductBtn>
                    buy now
                </ProductBtn>

            </ProductDiv>
    );
}

export default SecondProduct;