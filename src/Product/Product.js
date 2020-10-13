import React from "react";
import ProductDetails from "./Components/ProductDetails";
import ProductSeller from "./Components/ProductSeller";
import ProductExpression from "./Components/ProductExpression";
import ProductCategories from "./Components/ProductCategories";
import ProductRelated from "./Components/ProductRelated";
import {ProductStyles} from "./Components/styles/ProductStyles";

class Product extends React.Component{

    render() {
        return(
            <div style={ProductStyles.container}>
                <div style={ProductStyles.product}>
                    <ProductDetails />
                    <ProductSeller />
                    <ProductExpression />
                    <ProductCategories />
                    <ProductExpression />
                    <ProductExpression />
                    <ProductRelated />
                    <div>

                    </div>
                </div>
            </div>
        );
    }

}
export default Product;