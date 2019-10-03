import React from 'react';
import TodoInput from './TodoInput';

const TodoItem = props => {
    console.log(props)
    return (
        <div className='todo-item'>
            <h3>{props.item.todo}</h3>
            <TodoInput />
        </div>
    );
}

export default TodoItem;
