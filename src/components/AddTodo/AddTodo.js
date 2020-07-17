import React, { useState } from 'react';
import { connect } from 'react-redux';

function AddTodo(props) {
        const [text, setText] = useState('12');

        return (
                <div>
                        <input type="text" value={text} onChange={event => { setText(event.target.value) }} />
                        <button onClick={() => props.submitTextHandler(text)} >Add</button>
                </div>
        );
};

const mapStateToProps = (state) => {
        return {

        }
};

const mapDispatchToProps = (dispatch) => {
        return {
                submitTextHandler: (text) => dispatch({
                        type: 'ADD_TODO',
                        data: { text, completed: false }
                })
        }
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);