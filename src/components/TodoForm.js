import React, { Component } from 'react';

class TodoForm extends Component {
    constructor() {
        super();
        this.state = {
            todo: ''
        };
    }

   handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render() {
        return (
            <form>
                <input
                  type='text'
                  value={this.todo}
                  name='todo'
                  onChange={this.handleChange}
                />
                <button className='btn'>Add To My List</button>
            </form>
        )
    }
}



export default TodoForm;