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
        this.handleChangeCheck = this.handleChangeCheck.bind(this);
        this.state = {
            toDo: [
                { name: "Go biking", category: "hobby", state: true },
                { name: "ToDo List", category: "work", state: false },
                { name: "Going to the dentist", category: "important", state: false }
                ],
            showInput: false,
            filter: ['work', 'hobby', 'important']
        };
    }

    handleChangeCheck (){

        // this.setState((state, props) => ({
        // }));
    }

    handleClick(){
        this.setState((state, props) => ({
            showInput: !this.state.showInput
        }));
    }

    handleInputChange () {
        const copyOfToDo = this.state.toDo;

        // this.setState((state, props) => ({
        //
        // }));
    }
    
    render() {
        const {toDo, showInput, filter} = this.state;
        return(
            <div style={ToDoStyles.backGround}>
                <div style={ToDoStyles.toDo}>
                <ToDoHeader />
                <div style={ToDoStyles.line}>
    
                </div>
                <ToDoList todo={toDo} showInputTab={showInput} onHandleClick={this.handleClick} onChangeCheck={() => this.handleChangeCheck()}/>
                <ToDoFilter todo={toDo}/>
                <InputToDo todo={toDo} isShow={showInput} onHandleInputChange={() => this.handleInputChange()}/>
            </div>
            </div>
            );
    }
}
export default ToDo;