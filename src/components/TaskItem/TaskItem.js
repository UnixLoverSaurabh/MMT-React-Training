import React, { Component } from 'react';

class TaskItem extends Component {

        render() {

                const {id, clicked, theme} = this.props;

                return (
                        <div onClick={clicked}>
                                <h1 style={{color: theme}}>Task item {id}</h1>
                        </div>
                );
        };
};

export default TaskItem;