import React from "react";
import {ProductInnerStyles} from "./styles/ProductInnerStyles";

function ProductTopSeller () {

    return (
        <div style={ProductInnerStyles.productTopSeller}>
            <div style={ProductInnerStyles.innerSeller}>
                <div style={ProductInnerStyles.box}>
                    34900000 تومان
                </div>
                <div style={{...ProductInnerStyles.box,...{fontSize: 10}}}>
                    پاورتولز فروشنده برتر
                </div>
                <div style={ProductInnerStyles.box}>
                    icon
                </div>
            </div>
            <div style={ProductInnerStyles.innerSellerButton}>
                نمایش 2 فروشنده دیگر
            </div>
        </div>
    );
}
export default ProductTopSeller;

