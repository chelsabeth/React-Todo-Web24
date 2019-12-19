import React, {Component} from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';
import "./components/TodoComponents/Todo.css";


const toDoData = [ // array of objects for the TODO list data
  {
    name: "Clean Room",
    id: 1,
    completed: false
  },
  {
    name: "Order Groceries",
    id: 2,
    completed: false
  },
  {
    name: "Clean Out Fridge",
    id: 3,
    completed: false
  }
];

class App extends Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  // Acts as the index.js from todays guided project
  constructor() {
    super();
    this.state = {
      list: toDoData
    };
  }

  addItem = itemName => {
    const newItem = {
      name: itemName, 
      id: Date.now(),
      completed: false
    };
    this.setState({
      list: [...this.state.list, newItem]
    });
  };


  // toggleItem checks to see whether a task on the TODO list should show or not show. 
  // if an task is completed then it will not show, else it will show
  toggleItem = id => {
    console.log("This is from the toggleItem function", id); 
    this.setState({
      list: this.state.list.map(item => { // maps through the array of objects named "toDoData"
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed
          };
        } else {
          return item;
        }
      })
    });
  };

  clearCompleted = () => {
    this.setState({
      list: this.state.list.filter(item => !item.completed)
    });
  };

  render() {
    return (
    <div>
      <div className='header-of-app'>
        <h1>Welcome to your Todo App!</h1>
        <TodoForm addItem={this.addItem} />
      </div>
        <TodoList 
         toggleItem={this.toggleItem}
         clearCompleted={this.clearCompleted}
         list={this.state.list} /> 
      </div>
    );
  }
}
export default App;

