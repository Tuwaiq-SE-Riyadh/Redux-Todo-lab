const initialState = {
    todos: [],
  };

  const todos = (state = initialState, { type, payload }) => {
    switch (type) {
      case "ADD_TODOS":
        return {
          todos: payload,
        };
      case "REMOVE_TODOS":
        return {
          todos: state.todos.filter((el)=>{
            return el.id !== payload.id
        })
        };
  
      default:
        return state;
    }
  };

  export default todos;

  export const addTodos = (todos) => {
    return {
      type: "ADD_TODOS",
      payload: todos,
    };
  };
  
  export const removeTodos = (k) => {
    return {
      type: "REMOVE_TODOS",
      payload: k
    };
  };