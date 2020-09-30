import React from "react";
import {ToDoStyles} from "./styles/ToDoStyles";

function ToDoFilter ({toDo, filter}){


    const getColor = (item) => {
        switch (item) {
            case "work":
                return '#8A2BE2';
            case "hobby":
                return '#1E90FF';
            case "important":
                return '#FF0000';
            default:
                return 'black';
        }
    }

    return(
        <div style={ToDoStyles.toDoFilter}>
            {filter.map((item) => {
                return(
                    <button style={ToDoStyles.filter}>
                        <div style={{...ToDoStyles.circle,...{backgroundColor: getColor(item)}}}>

                        </div>
                        <div>
                            {item}
                        </div>
                    </button>
                );
            })}


        </div>
        );
}
export default ToDoFilter;