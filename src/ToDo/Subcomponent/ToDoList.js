import React from "react";
import {ToDoStyles} from "./styles/ToDoStyles";
import ToDoItem from "./ToDoItem";

function ToDoList({toDo, showInputTab, onHandleClick, showCategories, onChangeCheck, onDelete}) {


    const changeCheck = (index) => {
        onChangeCheck(index);
    }

    const handleClick = () => {
        onHandleClick();
    }

    const handleDelete = (index) => {
        onDelete(index);
    }

    toDo = toDo.filter((element) => showCategories.includes(element.category));
    return (
        <div style={ToDoStyles.toDoList}>
            {toDo.map((item, index) => {
                return (
                    <ToDoItem title={item.name} category={item.category} isChecked={item.isChecked}
                              onHandleChangeCheck={() => changeCheck(index)} onHandleDelete={() => handleDelete(index)}/>
                );
            })}
            <button style={ToDoStyles.addToDoBottom} onClick={handleClick}>
                {showInputTab ? '-' : '+'}
            </button>
        </div>
    );

}

export default ToDoList;