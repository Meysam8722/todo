import React from "react";
import {ToDoStyles} from "./styles/ToDoStyles";

export const ToDoItem = ({title, category, isChecked, onHandleChangeCheck, onHandleDelete}) => {
    const handleChangeCheck = () => {
        onHandleChangeCheck();
    }

    const handleDelete = () => {
        onHandleDelete();
    }

    if(isChecked){
        return (
            <div style={ToDoStyles.toDoItem}>
                <input type="checkbox" defaultChecked={isChecked} onChange={() => handleChangeCheck()} />
                <span>
                {title}
            </span>
                <button style={ToDoStyles.deleteButton} onClick={() => handleDelete()}>
                </button>
            </div>
        );
    }else{
        return (
            <div style={ToDoStyles.toDoItem}>
                <input type="checkbox" defaultChecked={isChecked} onChange={() => handleChangeCheck()} />
                <span>
                {title}
            </span>
            </div>
        );
    }
};

ToDoItem.defaultProps = {
    title: "",
    category: "",
    isChecked: false
}

export default ToDoItem;