import React from "react";
import {ProductStyles} from "./styles/ProductStyles";
import {ProductInnerStyles} from "./Subcomponents/styles/ProductInnerStyles";

function ProductFeatures() {

    return(
        <div style={ProductStyles.productExpression} >
            <div style={ProductInnerStyles.expressionHeader}>
                <button style={{...ProductInnerStyles.button,...{fontSize: 15, backgroundColor: '#F5F5F5'}}}>
                     بیشتر
                </button>
                <div style={{...ProductInnerStyles.box,...{flexBasis: '2%'}}}>

                </div>
                <div style={{...ProductInnerStyles.subject,...{fontSize: 18, flexBasis: '40%', backgroundColor:'#F5F5F5'}}}>
                    مشخصات فنی
                </div>
            </div>
            <div style={ProductInnerStyles.featureBody}>
                <div style={ProductInnerStyles.outerFeatureBox}>
                    <div style={ProductInnerStyles.innerFeatureBox}>
                        <div style={{...ProductInnerStyles.box,...{flexBasis: '54%', backgroundColor: '#F5F5F5'}}}>

                        </div>
                        <div style={ProductInnerStyles.featureBox}>
                            گرانروی: 10W40
                        </div>
                        <div style={ProductInnerStyles.circle}>

                        </div>
                    </div>
                </div>
                <div style={ProductInnerStyles.outerFeatureBox}>
                    <div style={ProductInnerStyles.innerFeatureBox}>
                        <div style={{...ProductInnerStyles.box,...{flexBasis: '61%', backgroundColor: '#F5F5F5'}}}>

                        </div>
                        <div style={{...ProductInnerStyles.featureBox,...{flexBasis: '23%'}}}>
                            حجم: 4 لیتر
                        </div>
                        <div style={ProductInnerStyles.circle}>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}
export default ProductFeatures;