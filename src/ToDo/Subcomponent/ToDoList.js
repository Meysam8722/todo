import React from "react";
import {ToDoStyles} from "./styles/ToDoStyles";

class ToDoList extends React.Component{

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleChangeChk = this.handleChangeChk.bind(this);
        this.state = {
            chkbox: '',

        };
    }

    handleChangeChk(){

    }

    handleClick(e){
        this.props.onHandleClick(e.target.onClick);
    }

    render(){
        let div = <>
            <div style={ToDoStyles.toDoList}>
                <div style={ToDoStyles.toDoItem}>
                    <input type="checkbox" defaultChecked={this.state.chkbox} onChange={this.handleChangeChk}/>
                </div>

                <div style={ToDoStyles.toDoItem}>
                    <input type="checkbox" defaultChecked={this.state.chkbox} onChange={this.handleChangeChk}/>
                </div>

                <button style={ToDoStyles.addToDoBottom} onClick={this.handleClick}/>
            </div>
        </>;
        return div;
    }
}
export default ToDoList;