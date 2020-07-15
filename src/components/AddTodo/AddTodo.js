import React, { useState } from 'react';

function AddTodo() {
        const [text, setText] = useState('12');

        const submitTextHandler = () => {
                console.log(text);
        };

        return (
                <div>
                        <input type="text" value={text} onChange={event => { setText(event.target.value) }} />
                        <button onClick={submitTextHandler} >Add</button>
                </div>
        );
};

export default AddTodo;