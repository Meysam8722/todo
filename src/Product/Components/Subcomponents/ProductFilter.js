import React from "react";
import {ProductInnerStyles} from "./styles/ProductInnerStyles";

function ProductFilter() {

    return(
        <div style={ProductInnerStyles.productFilter}>
            <div style={ProductInnerStyles.innerFilter}>
                <div style={{...ProductInnerStyles.filterBox,...{fontSize: 13, flexGrow: 3}}}>
                    روغن موتور
                </div>
                <div style={{...ProductInnerStyles.filterBox,...{flexGrow: 5, backgroundColor: '#F5F5F5'}}}>

                </div>
                <div style={{...ProductInnerStyles.filterBox,...{flexGrow: 2}}}>
                    2018
                </div>
                <div style={{...ProductInnerStyles.filterBox,...{flexGrow: 3}}}>
                    کاسترول
                </div>
                <div style={ProductInnerStyles.filterBox}>
                    icon
                </div>
            </div>
        </div>
    );
}
export default ProductFilter;