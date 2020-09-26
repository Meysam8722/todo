import React from "react";
import ToDoHeader from "./Subcomponent/ToDoHeader";
import ToDoList from "./Subcomponent/ToDoList";
import ToDoFilter from "./Subcomponent/ToDoFilter";
import InputToDo from "./Subcomponent/InputToDo";
import { ToDoStyles } from "./Subcomponent/styles/ToDoStyles";

class ToDo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newToDo: '',
            category: '',
            doneCheckBox: '',
        };
    }

    handleClick() {
        console.log('Click happened');
    }
    
    render() {
        return(
            <div style={ToDoStyles.backGround}>
                <div style={ToDoStyles.toDo}>
                <ToDoHeader />
                <div style={ToDoStyles.line}>
    
                </div>
                <ToDoList />
                <ToDoFilter />
            </div>
            </div>
            );
    }
}
export default ToDo;