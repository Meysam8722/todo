import React from "react";
import ToDoHeader from "./Subcomponent/ToDoHeader";
import ToDoList from "./Subcomponent/ToDoList";
import ToDoFilter from "./Subcomponent/ToDoFilter";
import InputToDo from "./Subcomponent/InputToDo";
import { ToDoStyles } from "./Subcomponent/styles/ToDoStyles";

class ToDo extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleChangeChk = this.handleChangeChk.bind(this);
        this.state = {
            newToDo: '',
            category: '',
            doneCheckBox: '',
            chkbox: '',
            inputToDo: false
        };
    }

    handleChangeChk(){

    }

    handleClick(inputToDo){
        return(
            <div style={ToDoStyles.backGround}>
                <div style={ToDoStyles.toDo}>
                    <ToDoHeader />
                    <div style={ToDoStyles.line}>

                    </div>
                    <ToDoList onHandleClick={this.handleClick}/>
                    <ToDoFilter />
                    <InputToDo />
                </div>
            </div>
        );
    }
    
    render() {
        return(
            <div style={ToDoStyles.backGround}>
                <div style={ToDoStyles.toDo}>
                <ToDoHeader />
                <div style={ToDoStyles.line}>
    
                </div>
                <ToDoList onHandleClick={this.handleClick}/>
                <ToDoFilter />
                <InputToDo />
            </div>
            </div>
            );
    }
}
export default ToDo;