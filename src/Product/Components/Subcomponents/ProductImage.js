import React from "react";
import ProductFooter from "./ProductFooter";
import {ProductInnerStyles} from "./styles/ProductInnerStyles";

function ProductImage() {

    return(
        <div style={ProductInnerStyles.productImage}>
            <div style={ProductInnerStyles.productInnerImage}>
                <div style={ProductInnerStyles.innerImage}>
                    <div style={ProductInnerStyles.brand}>

                    </div>
                </div>
                <div style={{...ProductInnerStyles.innerImage,...{flexGrow: 4}}}>

                </div>
                <div style={{...ProductInnerStyles.innerImage,...{alignItems: 'flex-end'}}}>
                    <button style={{...ProductInnerStyles.button,...{flexBasis: '20%'}}}>
                        Alert
                    </button>
                    <button style={{...ProductInnerStyles.button,...{flexBasis: '20%'}}}>
                        Price
                    </button>
                </div>

            </div>
            <ProductFooter />
        </div>
    );
}
export default ProductImage;