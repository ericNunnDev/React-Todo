import React, { Component } from 'react';

import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './styles/App.scss';

const todoData = [
  {
    task: '',
    id: Date.now(),
    completed: false
  }
]

class App extends Component {
 constructor() {
   super();
   this.state= {
     tasks: todoData,
   };
 }



  render() {
    return (
      <div className='App'>
        <h2 className='app-title'>Todo App</h2>
        <div>
          <TodoForm />
        </div>
      </div>
    );
  }
}

export default App;
