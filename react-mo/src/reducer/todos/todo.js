const initialState = {
    todos : [],
   };
  
  
  
  const todo = (state = initialState, { type, payload }) => {
    switch (type) {
      case "ADD_TODO":
        return {
          todos: payload
  
          
        };
      case "REMOVE_TODO":
        return {
          todos: state.todos.filter((el)=>{
            return el.id!==payload.id
          })
        };
      
        
  
      default:
        return state;
    }
  };
  
  export default todo;
  
  export const addtodos = (todos) => {
    return {
      type: "ADD_TODO",
      payload: todos,
    };
  };
  
  export const removetodos = (k) => {
    return {
      type: "REMOVE_TODO",
      payload:k
    };
  };
  
  export const updateUserName = (name) => {
    return {
      type: "UPDATE_USER_NAME",
      payload: name,
    };
  };
  