import React from 'react';

function TodoItem() {
        return(
                <div style={{padding: 12, margin: 12, border:'1px solid black'}}>
                        <input type={"checkbox"} checked={true} />
                        <span>Text here...</span>
                </div>
        );
};

export default TodoItem;