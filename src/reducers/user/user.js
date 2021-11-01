const initialState = {
  Todo:[]
};

const Todo = (state = initialState, {type ,payload}) => {
  switch (type) {

    case "ADD_USER":
      return {
        Todo: payload,
      };
      case "CLEAR_USER":
      return {
        Todo: state.Todo.filter((e,i)=>{
              return e.id !== payload.id; 
            })
      };
     
    default:
      return state;
  }
};

export default Todo;



export const addUser = (data) => {
  return {
    type: "ADD_USER",
    payload: data,
  };
};

export const clearUser = (data) => {
  return {
    type: "CLEAR_USER",
    payload: data,
  };
};




