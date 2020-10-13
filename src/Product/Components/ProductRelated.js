import React from "react";
import ProductImage from "./Subcomponents/ProductImage";
import ProductFooter from "./Subcomponents/ProductFooter";
import ProductHeader from "./Subcomponents/ProductHeader";
import {ProductStyles} from "./styles/ProductStyles";

function ProductRelated() {

    return(
        <div style={ProductStyles.productRelated} >
            <ProductHeader />
            <div>
                <ProductImage />
                <div></div>
                <ProductFooter />
            </div>

        </div>
    );
}
export default ProductRelated;