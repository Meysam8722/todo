import React from "react";
import {ToDoStyles} from "./styles/ToDoStyles";

function ToDoList({showInputTab, toDo, onHandleClick}) {


    const handleChangeChk = () => {

    }

    const handleClick = (e) => {
        onHandleClick(e.target.onClick);
    }


    return (
        <div style={ToDoStyles.toDoList}>

            <button style={ToDoStyles.addToDoBottom} onClick={handleClick}/>
        </div>
    );

}

export default ToDoList;