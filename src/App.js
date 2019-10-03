import React, {Component} from 'react';

import TodoItem from './components/TodoItem';
import todosData from './components/todosData';
import './styles/App.scss';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: todosData
    }
  }

  render() {
    const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item}/>)

    return (
      <div className='App'>
        <h2 className='app-title'>Todo App</h2>
        <div>
          {todoItems}
        </div>
      </div>
    );
  }
}
  

export default App;
