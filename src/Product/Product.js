import React from "react";
import ProductDetails from "./Components/ProductDetails";
import ProductSeller from "./Components/ProductSeller";
import ProductCategories from "./Components/ProductCategories";
import ProductRelated from "./Components/ProductRelated";
import {ProductStyles} from "./Components/styles/ProductStyles";
import ProductFeatures from "./Components/ProductFeatures";
import ProductComments from "./Components/ProductComments";
import ProductQuestions from "./Components/ProductQuestions";

class Product extends React.Component{

    render() {
        return(
            <div style={ProductStyles.container}>
                <div style={ProductStyles.product}>
                    <ProductDetails />
                    <ProductSeller />
                    <ProductFeatures />
                    <ProductCategories />
                    <ProductComments />
                    <ProductQuestions />
                    <ProductRelated />
                    <div>

                    </div>
                </div>
            </div>
        );
    }

}
export default Product;