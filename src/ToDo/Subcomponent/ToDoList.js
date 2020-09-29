import React from "react";
import {ToDoStyles} from "./styles/ToDoStyles";
import ToDoItem from "./ToDoItem";

function ToDoList({showInputTab, toDo, onHandleClick, onChangeCheck}) {


    const handleChangeCheck = () => {
        // onChangeCheck();
    }

    const handleClick = () => {
        onHandleClick();
    }


    return (
        <div style={ToDoStyles.toDoList}>
            {toDo && toDo.map((item) => {
                return(
                    <ToDoItem title={item.name} category={item.category} isChecked={item.state}/>
                );
            })}
            <button style={ToDoStyles.addToDoBottom} onClick={handleClick}>
                {showInputTab ? '-' : '+'}
            </button>
        </div>
    );

}

export default ToDoList;