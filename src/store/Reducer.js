const initialState = {
        todoListItems: [],
        currentFilter: 'ALL'
};

function Reducer(state = initialState, action) {
        switch(action.type) {
                case 'ADD_TODO':
                        const updatedTodoListItems = [...state.todoListItems, action.data];
                        return {
                                ...state,
                                todoListItems: updatedTodoListItems
                        }
                case 'SET_FILTER':
                        return {
                                ...state,
                                currentFilter: action.data
                        }
                default:
                        console.log('Default case encountered');
                        return state;
        }
};

export default Reducer;