import React, { Component } from 'react';
import './styles/App.scss';

class App extends Component {
 constructor() {
   super();
   this.state= {
     toDo: ''
   }
 }

  render() {
    return (
      <div className='App'>
        <h2>Welcome to your Todo App!</h2>
      </div>
    );
  }
}

export default App;
