import React from "react";
import {ToDoStyles} from "./styles/ToDoStyles";

class InputToDo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            input: "",
            value: "work"
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);


    }

    handleChange(event) {

        this.setState({value: event.target.value});

    };

    handleInputChange(event) {
        this.setState({
            input: event.target.value
        },()=>{
            console.log(this.state.input)
        })

    };

    handleSubmit(event) {
        event.preventDefault();
        this.props.onHandleSubmit(this.state.input, this.state.value);
    };

    render() {
        const{input, value} = this.state;
        if (!this.props.isShow) {
            return null
        }
        return (
            <div style={ToDoStyles.inputToDoStyle}>
                <form onSubmit={this.handleSubmit}>
                    <div style={ToDoStyles.newToDo}>
                        <input type="text" id="filter" value={input} placeholder="new todo"
                               onChange={this.handleInputChange}/>
                        <input type="submit" value="Submit"/>
                    </div>
                    <div style={ToDoStyles.markAsImportant}>
                        <label>
                            category:
                            <select value={value} onChange={this.handleChange}>
                                {this.props.filter && this.props.filter.map((item) => {
                                    return <option value={item}>{item}</option>;
                                })}
                            </select>
                        </label>
                    </div>
                </form>
            </div>
        );
    }

}

export default InputToDo;