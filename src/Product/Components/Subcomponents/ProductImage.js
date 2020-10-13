import React from "react";
import ProductFooter from "./ProductFooter";
import {ProductInnerStyles} from "./styles/ProductInnerStyles";

function ProductImage() {

    return(
        <div style={ProductInnerStyles.productImage}>
            <div style={ProductInnerStyles.productInnerImage}>

            </div>
            <ProductFooter />
            <div style={ProductInnerStyles.productTitle}>
                <div style={ProductInnerStyles.productPersianTitle}>
                    روغن موتور خودرو کاسترول مدل مگناچ
                </div>
                <div style={ProductInnerStyles.productEnglishTitle}>
                    Castrol Magnetec 4L 10W40 Car Engine Oil
                </div>
            </div>
        </div>
    );
}
export default ProductImage;