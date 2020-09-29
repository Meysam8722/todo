import React from "react";
import {ToDoStyles} from "./styles/ToDoStyles";

export const ToDoItem = ({title, category, isChecked, onHandleChangeCheck}) => {
    // const handleChangeCheck = () => {
    //     // onHandleChangeCheck();
    // }

    return (
        <div style={ToDoStyles.toDoItem}>
            <input type="checkbox" defaultChecked={isChecked} onChange={() => {}} />
            <span>
                {title}
            </span>
        </div>
    );
};

ToDoItem.defaultProps = {
    title: "",
    category: "",
    isChecked: false
}

export default ToDoItem;