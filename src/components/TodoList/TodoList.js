import React from 'react';
import TodoItem from '../TodoItem/TodoItem';
import { connect } from 'react-redux';

function TodoList(props) {

        return (
                <div>
                        {props.todoListItems.map((todoListItem) => {
                                return (<TodoItem todoItem={todoListItem} toToggle={props.toggleTodo} />)
                        })}

                        <span style={{ padding: 10, fontWeight: props.currFilter === 'ALL' ? 'bolder' : 'normal' }}
                                onClick={() => { props.setFilter('ALL') }} >ALL
                        </span>
                        <span style={{ padding: 10, fontWeight: props.currFilter === 'FINISHED' ? 'bolder' : 'normal' }}
                                onClick={() => { props.setFilter('FINISHED') }} >FINISHED
                        </span>
                        <span style={{ padding: 10, fontWeight: props.currFilter === 'PENDING' ? 'bolder' : 'normal' }}
                                onClick={() => { props.setFilter('PENDING') }} >PENDING
                        </span>
                </div>
        );
};

const mapStateToProps = (state) => {
        return {
                todoListItems: state.todoListItems,
                currFilter: state.currentFilter
        };
};

const mapDispatchToProps = (dispatch) => {
        return {
                setFilter: (filter) => {
                        dispatch({
                                type: 'SET_FILTER',
                                data: filter
                        })
                },
                toggleTodo: (todo) => {
                        dispatch({
                                type: 'TOGGLE_TODO',
                                data: todo
                        })
                }
        };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);