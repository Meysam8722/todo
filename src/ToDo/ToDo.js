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
            toDo: [{}],
            showInput: false,
            filter: ['work', 'hobby', 'important']
        };
    }

    handleChangeChk(){

    }

    handleClick(){
        this.setState((state, props) => ({
            showInput: !this.state.showInput
        }));
    }
    
    render() {
        const {toDo, showInput, filter} = this.state;
        return(
            <div style={ToDoStyles.backGround}>
                <div style={ToDoStyles.toDo}>
                <ToDoHeader />
                <div style={ToDoStyles.line}>
    
                </div>
                <ToDoList todo={toDo} showInputTab={showInput} onHandleClick={this.handleClick}/>
                <ToDoFilter todo={toDo}/>
                <InputToDo todo={toDo} isShow={showInput}/>
            </div>
            </div>
            );
    }
}
export default ToDo;