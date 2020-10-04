import React from "react";
import ToDoHeader from "./Subcomponent/ToDoHeader";
import ToDoList from "./Subcomponent/ToDoList";
import ToDoFilter from "./Subcomponent/ToDoFilter";
import InputToDo from "./Subcomponent/InputToDo";

import {ToDoStyles} from "./Subcomponent/styles/ToDoStyles";

class ToDo extends React.Component {
    constructor(props) {
        super(props);
        this.handleChangeCheck = this.handleChangeCheck.bind(this);
        this.handleChooseFilter = this.handleChooseFilter.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.state = {
            toDo: [
                {name: "ToDo List", category: "work", isChecked: false},
                {name: "Go biking", category: "hobby", isChecked: false},
                {name: "Going to the dentist", category: "important", isChecked: false}
            ],
            showInput: false,
            filter: ['work', 'hobby', 'important'],
            showFilter: []
        };
    }

    handleDelete (index) {
        let copyOfToDo = [...this.state.toDo];
        copyOfToDo = copyOfToDo.filter(element => element !== copyOfToDo[index]);
        this.setState({
           toDo: copyOfToDo
        },() => {
            console.log(this.state.toDo);
        });
    }

    handleChangeCheck(index) {
        const copyOfToDo = [...this.state.toDo];
        copyOfToDo[index].isChecked = !copyOfToDo[index].isChecked;
        this.setState({
            toDo: copyOfToDo
        }, () => {
            console.log(this.state.toDo)
        });
    }

    handleChooseFilter(item) {
        let copyOfShowFilter = [...this.state.showFilter];
        if(copyOfShowFilter.includes(item)){
            copyOfShowFilter.push(item);
            copyOfShowFilter = copyOfShowFilter.filter(element => element !== item);
        }else{
            copyOfShowFilter.push(item);
        }
        this.setState({
            showFilter: copyOfShowFilter
        });
    }

    handleSubmit(item, value) {
        const copyOfToDo = [...this.state.toDo];
        copyOfToDo.push({name: item, category: value, isChecked: false});
        this.setState({
            toDo: copyOfToDo,
            showInput: !this.state.showInput
        });
    }

    handleClick() {
        this.setState({
            showInput: !this.state.showInput
        });
    }

    render() {
        const {toDo, showInput, filter, showFilter} = this.state;
        return (
            <div style={ToDoStyles.backGround}>
                <div style={ToDoStyles.toDo}>
                    <ToDoHeader/>
                    <div style={ToDoStyles.line}>

                    </div>
                    <ToDoList toDo={toDo} showInputTab={showInput} showCategories={showFilter} onHandleClick={this.handleClick}
                              onChangeCheck={(index) => this.handleChangeCheck(index)} onDelete={(index) => this.handleDelete(index)}/>
                    <ToDoFilter filter={filter} onChooseFilter={(item) => this.handleChooseFilter(item)}/>
                    <InputToDo filter={filter} isShow={showInput}  onHandleSubmit={(item, value) => this.handleSubmit(item, value)} />
                </div>
            </div>
        );
    }
}

export default ToDo;