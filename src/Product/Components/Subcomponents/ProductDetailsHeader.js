import React from "react";
import {ProductInnerStyles} from "./styles/ProductInnerStyles";

function ProductDetailsHeader() {

    return (
        <div style={ProductInnerStyles.productDetailsHeader}>

            <div style={ProductInnerStyles.innerDetailsHeader}>
                <button style={ProductInnerStyles.button}/>
                <button style={ProductInnerStyles.button}/>
                <div style={ProductInnerStyles.subject}>

                </div>
                <div style={ProductInnerStyles.subject}>
                    جزئیات محصول
                </div>
                <button style={ProductInnerStyles.button}/>
            </div>
        </div>
    );
}

export default ProductDetailsHeader;