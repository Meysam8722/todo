    import React from "react";

export const ProductStyles = {

    container: {
        backgroundColor: 'yellow',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    },

    product: {
        backgroundColor: 'white',
        display: 'flex',
        alignItems: 'stretch',
        flexDirection: 'column',
        borderStyle: 'Groove',
        borderColor: 'gray',
        width: 300,
        height: 1000
    },

    productDetails: {
        backgroundColor: 'red',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        flexBasis: '38%',
    },

    productSeller: {
        backgroundColor: 'green',
        display: 'flex',
        flexDirection: 'column',
        flexBasis: '100px',

    },

    productExpression: {
        backgroundColor: 'violet',
        display: 'flex',
        flexDirection: 'column',
        flexBasis: '100px',
    },

    productCategories: {
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
        flexBasis: '100px',
    },

    productRelated: {
        backgroundColor: 'blue',
        display: 'flex',
        flexDirection: 'column',
        flexBasis: '100px',
    },
};