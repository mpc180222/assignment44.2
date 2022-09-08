const INIT_STATE = { todos: []};

function rootReducer(state = INIT_STATE, action){

    switch(action.type){

        case "ADD":
            return {...state, todos: [...state.todos, action.payload]}
        case "REMOVE":
            return {...state, todos: state.todos.filter((td,i)=> i !== action.payload)}
        default:
            return state;

    }


}

export default rootReducer;