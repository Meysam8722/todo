import React from "react";
import {ToDoStyles} from "./styles/ToDoStyles";

function InputToDo ({toDo, isShow, onHandleInputChange, onHandleSubmit}) {

    let value;

    const handleChange = () => {

    };

    const handleInputChange = (event) => {
        value = event.target.value;
    };

    const handleSubmit = (event) => {
        onHandleSubmit(value);
        event.preventDefault();
    };

    if(!isShow){
            return null
        }
        return (
            <div style={ToDoStyles.inputToDoStyle}>
                <div style={ToDoStyles.newToDo}>
                    <form onSubmit={handleSubmit}>
                        <input type="text" id="filter" value={value} placeholder="new todo" ref={input => {}/*this.search = input*/}
                               onChange={handleInputChange}/>
                        <input type="submit" value="Submit" />
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