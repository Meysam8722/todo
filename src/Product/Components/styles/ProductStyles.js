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
        flexBasis: '38%',
        alignItems: 'stretch',

    },

    productExpression: {
        backgroundColor: '#F5F5F5',
        display: 'flex',
        flexBasis: '20%',
        flexDirection: 'column',
    },

    productCategories: {
        backgroundColor: '#F5F5F5',
        display: 'flex',
        flexDirection: 'column',
        flexBasis: '5%',
    },

    innerCategories: {
        backgroundColor: '#F5F5F5',
        display: 'flex',
        flexDirection: 'row',
        flexGrow: 1,
        justifyContent: 'space-around',
        alignItems: 'stretch'
    },

    productRelated: {
        backgroundColor: 'blue',
        display: 'flex',
        flexDirection: 'column',
        flexBasis: '100px',
    },
};