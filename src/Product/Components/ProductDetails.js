import React from "react";
import ProductExtraInfo from "./Subcomponents/ProductExtraInfo";
import ProductImage from "./Subcomponents/ProductImage";
import ProductDetailsHeader from "./Subcomponents/ProductDetailsHeader";
import {ProductStyles} from "./styles/ProductStyles";

function ProductDetails () {

    return(
        <div style={ProductStyles.productDetails}>
            <ProductDetailsHeader />
            <ProductExtraInfo />
            <ProductImage />
        </div>
    );

}
export default ProductDetails;