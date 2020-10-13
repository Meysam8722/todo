import React from "react";
import {ProductInnerStyles} from "./styles/ProductInnerStyles";

function ProductDetailsHeader() {

    return (
        <div style={ProductInnerStyles.productDetailsHeader}>

            <button style={ProductInnerStyles.button}/>
            <button style={ProductInnerStyles.button}/>
            <div style={ProductInnerStyles.subject}>

            </div>
            <div style={ProductInnerStyles.subject}>
                جزئیات محصول
            </div>
            <button style={ProductInnerStyles.button}/>
        </div>
    );
}

export default ProductDetailsHeader;