const initialState = {
    todo: [],
};

const todo = (state = initialState, { type, payload }) => {
    switch (type) {
        case "ADD_TODO":
            return {
                todo: payload,
            };
        
        case "Remove_TODO":
            return {
                todo: state.todo.filter((MN) => {
                    return MN.id !== payload.id

                })
            };



        default:
            return state;
    }
};

export default todo;

export const addTodo = (todo) => {
    return {
        type: "ADD_TODO",
        payload: todo,
    };
};

export const removeTodo = (P) => {
    return {
        type: "REMOVE_TODO",
        payload: P
    };
};


