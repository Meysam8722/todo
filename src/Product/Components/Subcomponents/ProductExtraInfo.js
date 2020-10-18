import React from "react";
import {ProductInnerStyles} from "./styles/ProductInnerStyles";

function ProductExtraInfo() {

    return(
        <div style={ProductInnerStyles.productExtraInfo}>
            <div style={ProductInnerStyles.innerExtraInfo}>
                <div style={ProductInnerStyles.box}>
                    4.5
                </div>
                <div style={{...ProductInnerStyles.box,...{flexBasis: '20%'}}}>
                    Stars
                </div>
                <div style={{...ProductInnerStyles.box,...{backgroundColor: '#00CC00', flexBasis: '10%'}}}>

                </div>
                <div style={{...ProductInnerStyles.subject,...{fontSize: 11, flexBasis: '40%'}}}>
                    پیشنهاد شده توسط 20 نفر
                </div>
            </div>
        </div>);
}
export default ProductExtraInfo;