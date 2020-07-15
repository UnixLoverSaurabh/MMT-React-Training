import React from 'react';
import TodoItem from '../TodoItem/TodoItem';

function TodoList() {

        return(
                <div>
                        <TodoItem />
                        <span style={{padding: 10}}>ALL</span>
                        <span style={{padding: 10}}>PENDING</span>
                        <span style={{padding: 10}}>FINISHED</span>
                </div>
        );
};

export default TodoList;