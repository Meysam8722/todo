import React from "react";
import {ToDoStyles} from "./styles/ToDoStyles";

function ToDoFilter ({todo}){



    return(
        <div style={ToDoStyles.toDoFilter}>
            <button style={ToDoStyles.filter}>
                <div style={{...ToDoStyles.circle,...{backgroundColor: '#8A2BE2'}}}>
                    
                </div>
                <div>
                    work
                </div>
            </button>
            <button style={ToDoStyles.filter}>
                <div style={{...ToDoStyles.circle,...{backgroundColor: '#1E90FF'}}}>
                    
                </div>
                <div>
                    hobby
                </div>
            </button>
            <button style={ToDoStyles.filter}>
                <div style={ToDoStyles.circle}>
                    
                </div>
                <div>
                    important
                </div>
            </button>

        </div>
        );
}
export default ToDoFilter;