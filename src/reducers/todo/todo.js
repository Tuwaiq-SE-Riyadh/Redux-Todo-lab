const initialState = []

const todo = (state = initialState, { type, payload }) => {
  switch (type) {
    case "ADD_TODO":
      return {
        todo: payload,
      };
    case "REMOVE_TODO":
      return {
        todo: payload,
      };
    default:
      return state;
  }
};
export default todo;

export const addtodo = (todo) => {
  
  return {
    type: "ADD_TODO",
    payload: todo,
  };
};

export const removetodo = () => {
  return {
    type: "CLEAR_USER",
  };
};
