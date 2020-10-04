import React from "react";


export const ToDoStyles={

    backGround: {
        backgroundColor: '#F0E68C',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        // width: "450px",
        // height: "670px",
        // margin: "5px",
        },

    toDo: {
        backgroundColor: 'white',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        flexBasis: '520px',
        // width: "320px",
        // height: "570px",
        // margin: "5px",
        borderStyle: 'solid'
    },
    inputToDoStyle: {
        backgroundColor: 'white',
        display: 'flex',
        flexBasis: '20%',
        alignItems: 'center',
        flexDirection: 'column',
        // width: "270px",
        // height: "100px",
        borderStyle: 'solid',
        borderBottom: 0
    },

    toDoHeaderStyle: {
        backgroundColor: 'white',
        display: 'flex',
        width: "260px",
        flexBasis: '20%',
        flexDirection: 'row',
        justifyContent: 'spaceBetween',
        alignItems: 'flexEnd',
        // width: "270px",
        // height: "40px",
        // margin: 5,
        // marginTop: 12.5
    },

    innerHeader: {
        backgroundColor: 'white',
        justifyContent: "space-between",
        flexDirection: "row",
        display: "flex",
        flexGrow: 1,
        alignItems: 'baseline',
    },

    subject: {
        backgroundColor: 'white',
        display: 'flex',
        flexBasis: '30%',
        alignSelf: 'flexStart',
        fontSize: '20px',
        // width: "270px",
        // height: "40px",
        // margin: 5,
        // marginTop: 12.5
    },
    date: {
        backgroundColor: 'white',
        display: 'flex',
        flexBasis: 'auto',
        // width: "270px",
        // height: "40px",
        // margin: 5,
        // marginTop: 12.5
    },
    line: {
        backgroundColor: 'black',
        display: 'flex',
        flexBasis: "1%",
        justifyContent: 'center',
        alignItems: 'center',
        width: "275px",
        // height: "3px",
        margin: 5,
        // marginTop: 5,
        // marginBottom: 20
    },

    toDoList: {
        backgroundColor: 'white',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flexDirection: 'column',
        // width: 220,
        flexGrow: 1,
        // margin: 5,
        // marginTop: 40
    },

    toDoItem: {
        backgroundColor: 'white',
        display: 'flex',
        justifyContent: 'flexStart',
        alignItems: 'center',
        flexDirection: 'row'
        // width: 207,
        // height: 25,
        // margin: 5
    },

    addToDoBottom: {
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        // margin: 5,
        width: 25,
        height: 25
    },

    deleteButton: {
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        // margin: 5,
        width: 15,
        height: 15
    },

    toDoFilter: {
        backgroundColor: 'white',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row', flexBasis: '10%'
        // width: 300,
        // height: 35,
        // margin: 5
    },

    circle: {
        width: 12,
        height: 12,
        borderRadius: 10,
        backgroundColor: '#FF0000',
        display: 'flex',
        flexDirection: 'row',
        // margin: 2
    },

    filter: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: 'white',
        color: 'black',
        alignItems: 'center',
        // margin: 5,
        // height: 25,
        borderStyle: 'hidden'
    },


    newToDo: {
        backgroundColor: 'white',
        border: 'black',
        color: 'black',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        // width: 250,
        // height: 30,
        // margin: 5,
        // marginTop: 25
    },

    markAsImportant: {
        fontSize: 15,
        Color: 'red',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        // height: 25,
        // margin: 5,
        color: 'red',
        // marginTop: 5
    },


};