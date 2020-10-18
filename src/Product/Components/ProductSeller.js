import React from "react";
import ProductFilter from "./Subcomponents/ProductFilter";
import ProductTopSeller from "./Subcomponents/ProductTopSeller";
import {ProductStyles} from "./styles/ProductStyles";
import {ProductInnerStyles} from "./Subcomponents/styles/ProductInnerStyles";

function ProductSeller() {

    return(
        <div style={ProductStyles.productSeller} >
            <ProductFilter />
            <div style={ProductInnerStyles.productFilter}>
                <div style={ProductInnerStyles.innerFilter}>
                    <div style={ProductInnerStyles.filterBox}>
                        206
                    </div>
                    <div style={ProductInnerStyles.filterBox}>
                        206
                    </div>
                    <div style={ProductInnerStyles.filterBox}>
                        206
                    </div>
                    <div style={{...ProductInnerStyles.filterBox,...{fontSize: 10}}}>
                        :مناسب برای خودروی
                    </div>
                </div>
            </div>
            <ProductTopSeller />
            <div style={ProductStyles.productExpression} >
                <div style={ProductInnerStyles.expressionHeader}>
                    <button style={{...ProductInnerStyles.button,...{fontSize: 15, backgroundColor: '#F5F5F5'}}}>
                        بیشتر
                    </button>
                    <div style={ProductInnerStyles.box}>

                    </div>
                    <div style={{...ProductInnerStyles.subject,...{fontSize: 18, backgroundColor: '#F5F5F5'}}}>
                        توضیحات
                    </div>
                </div>
                <div style={ProductInnerStyles.expressionBody}>
                    شرکت کاسترول به عنوان یکی از تولیدکنندگان پیشرو در صنعت تولید روغن های روان کننده و گریس در سطح جهانی محسوب می شود که مورد استفاده بسیاری از شرکت های تولید ...
                </div>

            </div>
        </div>
    );
}

export default ProductSeller;
