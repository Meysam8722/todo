import React from "react";
import {ProductStyles} from "./styles/ProductStyles";
import {ProductInnerStyles} from "./Subcomponents/styles/ProductInnerStyles";

function ProductCategories() {

    return(
        <div style={ProductStyles.productCategories} >
            <div style={ProductStyles.innerCategories}>
                <button style={ProductInnerStyles.button}>
                    روغن موتورها
                </button>
                <button style={ProductInnerStyles.button}>
                    لوازم مصرفی موتور
                </button>
                <button style={ProductInnerStyles.button}>
                    فروشگاه
                </button>
            </div>
        </div>
    );
}
export default ProductCategories;