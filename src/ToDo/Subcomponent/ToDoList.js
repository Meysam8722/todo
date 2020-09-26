import React from "react";
import {ToDoStyles} from "./styles/ToDoStyles";

class ToDoList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          doneCheckBox: ''
        };
    }

    render(){
        return(
            <div style={ToDoStyles.toDoList}>
                <div style={ToDoStyles.toDoItem}>
                    <input type="checkbox" defaultChecked={this.state.chkbox} onChange={this.handleChangeChk} />
                </div>

                <div style={ToDoStyles.toDoItem}>
                    <input type="checkbox" defaultChecked={this.state.chkbox} onChange={this.handleChangeChk} />
                </div>

                <button style={ToDoStyles.addToDoButtom} onClick={() => {}}/>
            </div>
            );
    }
}
export default ToDoList;