import React from "react";
import {ProductStyles} from "./styles/ProductStyles";
import {ProductInnerStyles} from "./Subcomponents/styles/ProductInnerStyles";

function ProductComments() {

    return(
        <div style={ProductStyles.productExpression} >
            <div style={ProductInnerStyles.expressionHeader}>
                <button style={{...ProductInnerStyles.button,...{fontSize: 15, backgroundColor: '#F5F5F5'}}}>
                    بیشتر
                </button>
                <div style={{...ProductInnerStyles.box,...{flexBasis: '2%'}}}>

                </div>
                <div style={{...ProductInnerStyles.subject,...{fontSize: 18, flexBasis: '40%', backgroundColor: '#F5F5F5'}}}>
                    نظرات کاربران
                </div>
            </div>
            <div style={ProductInnerStyles.productCustomer}>
                <div style={ProductInnerStyles.customerHeader}>
                    <div style={{...ProductInnerStyles.subject,...{flexBasis: '20%'}}}>

                    </div>
                    <div style={{...ProductInnerStyles.subject,...{flexBasis: '40%', fontSize: 10}}}>
                        23 خرداد ساعت 20:00
                    </div>
                    <div style={{...ProductInnerStyles.subject,...{flexBasis: '20%'}}}>
                        میترا
                    </div>
                    <div style={{...ProductInnerStyles.circle,...{flexBasis: '14%', borderRadius: 40}}}>

                    </div>
                    <div style={{...ProductInnerStyles.subject,...{flexBasis: '5%'}}}>

                    </div>
                </div>
                <div style={ProductInnerStyles.customerBody}>
                    خودروهای دهه جدید میلادی، تفاوت های بسیاری با نمونه های قدیمی خود دارند
                </div>
            </div>

        </div>
    );
}
export default ProductComments;