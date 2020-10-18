import React from "react";
import {ProductInnerStyles} from "./styles/ProductInnerStyles";

function ProductFooter() {

    return(
        <div style={ProductInnerStyles.productFooter}>
            <div style={ProductInnerStyles.innerFooter}>
                <div style={{...ProductInnerStyles.box,...{flexBasis: '60%', backgroundColor: "#FFE599"}}}>

                </div>
                <button style={ProductInnerStyles.dislikeButton}>
                    Dislike
                </button>
                <button style={ProductInnerStyles.likeButton}>
                    Like
                </button>
            </div>
        </div>
    );
}
export default ProductFooter;