import React from "react";
import {ProductInnerStyles} from "./styles/ProductInnerStyles";

function ProductTitle () {

    return(
        <div style={ProductInnerStyles.productTitle}>
            <div style={ProductInnerStyles.productPersianTitle}>
                روغن موتور خودرو کاسترول مدل مگناچ
            </div>
            <div style={ProductInnerStyles.productEnglishTitle}>
                Castrol Magnetec 4L 10W40 Car Engine Oil
            </div>
        </div>
    );
}
export default ProductTitle;