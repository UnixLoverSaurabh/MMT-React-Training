import React from 'react';

function TodoItem(props) {
        return (
                <div style={{ padding: 12, margin: 12, border: '1px solid black' }}>
                        <input type={"checkbox"} checked={true} />
                        <span>{props.todoItem}</span>
                </div>
        );
};

export default TodoItem;