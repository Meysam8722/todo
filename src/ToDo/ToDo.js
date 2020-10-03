import React from "react";
import ToDoHeader from "./Subcomponent/ToDoHeader";
import ToDoList from "./Subcomponent/ToDoList";
import ToDoFilter from "./Subcomponent/ToDoFilter";
import InputToDo from "./Subcomponent/InputToDo";

import {ToDoStyles} from "./Subcomponent/styles/ToDoStyles";

class ToDo extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleChangeCheck = this.handleChangeCheck.bind(this);
        this.state = {
            toDo: [
                {name: "Go biking", category: "hobby", state: true},
                {name: "ToDo List", category: "work", state: false},
                {name: "Going to the dentist", category: "important", state: false}
            ],
            showInput: false,
            filter: ['work', 'hobby', 'important', 'nothing']
        };
    }

    handleChangeCheck() {

    }

    handleChange() {

    }

    handleSubmit(item, value) {
        const copyOfToDo = [...this.state.toDo];
        copyOfToDo.push({name: item, category: value, isChecked: false});
        this.setState((state, props) => ({
            toDo: copyOfToDo,
            showInput: !this.state.showInput
        }),() => {
            console.log(this.state.toDo)
        });
    }


    handleClick() {
        this.setState((state, props) => ({
            showInput: !this.state.showInput
        }));
    }

    render() {
        const {toDo, showInput, filter} = this.state;
        return (
            <div style={ToDoStyles.backGround}>
                <div style={ToDoStyles.toDo}>
                    <ToDoHeader/>
                    <div style={ToDoStyles.line}>

                    </div>
                    <ToDoList toDo={toDo} showInputTab={showInput} onHandleClick={this.handleClick}/>
                    <ToDoFilter filter={filter}/>
                    <InputToDo filter={filter} isShow={showInput}  onHandleSubmit={(item, value) => this.handleSubmit(item, value)} />
                </div>
            </div>
        );
    }
}

export default ToDo;