// this is a component that takes in the todo data and displays the task to the screen. Acts as the Item.js from guided project

import React from "react";

const Todo = props => {
    return (
        <div className={`${props.item.completed ? 'completed' : ''}`}
        onClick={() => props.toggleItem(props.item.id)}
        > 
        <p>{props.item.name}</p>
        </div>
    );
};

export default Todo;