import React from "react";
import {ToDoStyles} from "./styles/ToDoStyles";

function ToDoHeader() {
    return (
        <div style={ToDoStyles.toDoHeaderStyle}>
            <div style={{justifyContent: "space-between", flexDirection: "row", display: "flex", flexBasis: "100%", flex: 1}}>
                <div style={ToDoStyles.subject}>
                    ToDoList
                </div>
                <div style={ToDoStyles.date}>
                    Date
                </div>
            </div>
        </div>
    );
}

export default ToDoHeader;