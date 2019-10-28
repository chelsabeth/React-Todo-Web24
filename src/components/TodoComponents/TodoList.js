// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

// this component receives your Todos array and iterates over the list generating a new <Todo /> for each element in the array. Acts as the GroceryList.js from todays guided project

import React from "react";
import Todo from "./Todo";

const TodoList = props => {

    return (
        <div className="todo-list">
            {props.list.map(item => (
                <Todo key={item.id} item={item} toggleItem={props.toggleItem} />
            ))}
            <button className="clear-task" onClick={props.clearItem}>
                Clear Item
            </button>
        </div>
    );
};

export default TodoList;