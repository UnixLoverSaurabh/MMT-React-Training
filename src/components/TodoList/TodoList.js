import React from 'react';
import TodoItem from '../TodoItem/TodoItem';
import { connect } from 'react-redux';

function TodoList(props) {

        return (
                <div>
                        {props.todoListItems.map((todoListItem) => {
                                return (<TodoItem todoItem={todoListItem} />)
                        })}

                        <span style={{ padding: 10 }}>ALL</span>
                        <span style={{ padding: 10 }}>PENDING</span>
                        <span style={{ padding: 10 }}>FINISHED</span>
                </div>
        );
};

const mapStateToProps = (state) => {
        return {
                todoListItems: state.todoListItems
        };
};

const mapDispatchToProps = (dispatch) => {
        return {

        };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);