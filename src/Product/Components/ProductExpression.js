import React from "react";
import ProductCustomer from "./Subcomponents/ProductCustomer";
import {ProductStyles} from "./styles/ProductStyles";

function ProductExpression() {

    return(
        <div style={ProductStyles.productExpression} >
            <div></div>
            <ProductCustomer />
        </div>
    );
}
export default ProductExpression;