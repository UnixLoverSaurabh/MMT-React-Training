const initialState = {
        todoListItems: []
};

function Reducer(state = initialState, action) {
        switch(action.type) {
                case 'ADD_TODO':
                        const updatedTodoListItems = [...state.todoListItems, action.data];
                        console.log(updatedTodoListItems);
                        return {
                                ...state,
                                todoListItems: updatedTodoListItems
                        }
                default:
                        console.log('Default case encountered');
                        return state;
        }
};

export default Reducer;