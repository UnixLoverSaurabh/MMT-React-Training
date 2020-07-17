import React from 'react';

function TodoItem(props) {
        return (
                <div style={{ padding: 12, margin: 12, border: '1px solid black' }} onClick={() => {props.toToggle(props.todoItem)}}>
                        <input type={"checkbox"} checked={props.todoItem.completed} />
                        <span>{props.todoItem.text}</span>
                </div>
        );
};

export default TodoItem;