import React, { Component } from 'react';
import TaskItem from '../TaskItem/TaskItem';

class TaskList extends Component {

        state = {
                activated: 0
        }

        clickHandler = (id) => {
                this.setState({
                        activated: id
                })
        }

        render() {

                let taskitem = [];
                for(let i = 1 ; i <= 5 ; i++) {
                        taskitem.push(<TaskItem id={i} clicked={() => this.clickHandler(i)} theme={this.state.activated === i ? 'red' : 'blue'} />);
                }
                return(
                        <div>
                                {taskitem}
                                {/* <TaskItem id={1} clicked={() => this.clickHandler(1)} theme={this.state.activated === 1 ? 'red' : 'blue'} />
                                <TaskItem id={2} clicked={() => this.clickHandler(2)} theme={this.state.activated === 2 ? 'red' : 'blue'}/>
                                <TaskItem id={3} clicked={() => this.clickHandler(3)} theme={this.state.activated === 3 ? 'red' : 'blue'}/>
                                <TaskItem id={4} clicked={() => this.clickHandler(4)} theme={this.state.activated === 4 ? 'red' : 'blue'}/>
                                <TaskItem id={5} clicked={() => this.clickHandler(5)} theme={this.state.activated === 5 ? 'red' : 'blue'}/> */}
                        </div>
                );
        };
};

export default TaskList;