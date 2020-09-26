import React from "react";
import {ToDoStyles} from "./styles/ToDoStyles";

class InputToDo extends React.Component {
    handleChange;
    handleSubmit;
    handleInputChange;

    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
    }
   
    render(){
       
        return(
            <div style={ToDoStyles.inputToDoStyle} >
                <div style={ToDoStyles.newToDo}>
                <form>
                    <input type="text" id="filter" placeholder="new todo" ref={input => this.search = input} onChange={this.handleInputChange}/>
                </form>
                </div>

                <div style={ToDoStyles.markAsImportant}>
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            category: 
                            <select value={this.state.value} onChange={this.handleChange}>
                                <option value="Work">Work</option>
                                <option value="Hobby">Hobby</option>
                                <option value="important">Important</option>
                            </select>
                        </label>
                    {/* <input type="submit" value="Submit" style={ToDoStyles.filter}/>  */}
                </form>
                </div>
            </div>
            );
    }
}
export default InputToDo;