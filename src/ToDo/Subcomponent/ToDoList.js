import React from "react";
import {ToDoStyles} from "./styles/ToDoStyles";
import ToDoItem from "./ToDoItem";

function ToDoList({showInputTab, toDo, onHandleClick, onChangeCheck}) {


    const handleChangeCheck = () => {
        onChangeCheck();
    }

    const handleClick = () => {
        onHandleClick();
    }


    return (
        <div style={ToDoStyles.toDoList}>
            <ToDoItem todo={toDo} onHandleChangeCheck={handleChangeCheck}/>
            <button style={ToDoStyles.addToDoBottom} onClick={handleClick}>
                {showInputTab ? '-' : '+'}
            </button>
        </div>
    );

}

export default ToDoList;