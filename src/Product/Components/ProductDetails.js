import React from "react";
import ProductExtraInfo from "./Subcomponents/ProductExtraInfo";
import ProductImage from "./Subcomponents/ProductImage";
import ProductDetailsHeader from "./Subcomponents/ProductDetailsHeader";
import ProductTitle from "./Subcomponents/ProductTitle";
import {ProductStyles} from "./styles/ProductStyles";

function ProductDetails () {

    return(
        <div style={ProductStyles.productDetails}>
            <ProductDetailsHeader />
            <ProductExtraInfo />
            <ProductImage />
            <ProductTitle />
        </div>
    );

}
export default ProductDetails;