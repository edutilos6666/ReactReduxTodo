import {createAction, handleActions} from 'redux-actions';

// Initial State
const initialState = {
    todos: [
        {
            id: 0,
            title: "Todo 0",
            done: false
        },
        {
            id: 1,
            title: "Todo 1",
            done: false
        }
    ]
};

// Action types
const ADD_TODO = 'todo/TODO/ADD';
const TOGGLE_TODO = 'todo/TODO/TOGGLE';
export const actionTypes = {
    ADD_TODO, TOGGLE_TODO
};

// Actions
export const actions = {
    addTodo: createAction(ADD_TODO, title=> ({title})),
    toggleTodo: createAction(TOGGLE_TODO, id=> ({id}))
};

// Reducers
export const reducers = handleActions({
    [ADD_TODO]: (state, action) => { 
        return {
            todos: [
                ...state.todos,
                {
                    id: state.todos.length,
                    title: action.payload.title,
                    done: false
                }
            ]
        }
    }, 
    [TOGGLE_TODO]: (state, action) => {
        // var todo  = state.todos.filter(one=> one.id === action.payload.id)[0];
        // todo.done = !todo.done;
        // return {
        //     todos: [
        //         ...state.todos.filter(one => one.id !== action.payload.id),
        //         todo
        //     ]
        // }
        const tmp = [...state.todos];
        console.log(tmp, tmp instanceof Array);
        tmp.forEach((one, index) => {
            if(one.id === action.payload.id) {
                one.done = !one.done;
                one.title = one.title + 'x'
            }
        });

        return {
            todos: tmp
        }

    }
}, initialState);


// Selectors 
const allTodos = state => state.Todo.todos;

export const selectors = {
    allTodos
};