const initialState = {
    array:[]
  };


  const todo = (state = initialState, { type, payload }) => {
    switch (type) {
      case "ADD_TODO":
        return{
            array: payload
        }
        
      case "REMOVE_TODO":
      return{
        array: payload
    } 
      default:
        return state;
    }
  };
  
  export default todo;

  export const addTodo = (arr) => {
    return {
      type: "ADD_TODO",
      payload: arr,
    };
  };

  export const removeTodo = (arr) => {
    return {
      type: "REMOVE_TODO",
      payload: arr,
    };
  };