// this component will hold your input field and your Add Todo and Clear Completed buttons.
// Your input field should take in user input, and allow a user to press Enter or click on the Submit Button to add a todo to your list. Acts as the ListForm.js from todays guided project

import React from "react";

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            newItem: ""
        };
    }

    handleChanges = e => {
        // update state with each keystroke
        this.setState({
            newItem: e.target.value
        });
    };

    handelSubmit = e => {
        e.preventDefault();
        console.log("is this thing on?");
        // add our typed in item to the list!
        this.props.addItem(this.state.newItem);
    };

    render() {
        return (
            <form onSubmit={this.handelSubmit}>
                <input 
                type="text"
                name="item"
                value={this.state.newItem}
                onChange={this.handleChanges}
                />
                <button>Add Task</button>
            </form>
        );
    }
}

export default TodoForm;