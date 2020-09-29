import React from "react";
import {ToDoStyles} from "./styles/ToDoStyles";

function InputToDo({todo, isShow, onHandleInputChange}) {

    const value = 'Work';

    const handleChange = () => {

    };

    const handleSubmit = () => {

    };

    const handleInputChange = () => {
        onHandleInputChange();
    };

    if(!isShow){
        return null;
    }

    return (
        <div style={ToDoStyles.inputToDoStyle}>
            <div style={ToDoStyles.newToDo}>
                <form>
                    <input type="text" id="filter" placeholder="new todo" ref={input => {}/*this.search = input*/}
                           onChange={handleInputChange}/>
                </form>
            </div>

            <div style={ToDoStyles.markAsImportant}>
                <form onSubmit={handleSubmit}>
                    <label>
                        category:
                        <select value={value} onChange={handleChange}>
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

export default InputToDo;