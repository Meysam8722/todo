import React from "react";
import {ProductInnerStyles} from "./styles/ProductInnerStyles";

function ProductFooter() {

    return(
        <div style={ProductInnerStyles.productFooter}>
            <div style={{...ProductInnerStyles.box,...{flexBasis: '60%', backgroundColor: "#FFE599"}}}></div>
            <button style={ProductInnerStyles.dislikeButton}/>
            <button style={ProductInnerStyles.likeButton}/>
        </div>
    );
}
export default ProductFooter;