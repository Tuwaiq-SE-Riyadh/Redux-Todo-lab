const initialState = {
    user: [],
  };
  
  const user = (state = initialState, { type, payload }) => {
    switch (type) {
      case "ADD_USER":
        const array = state.user.slice()
        array.push(payload)
        return {
          user: array,
        };
      case "ADD_TODOS":
        return {
          user: payload,
        };
        case "REMOVE_TODOS":
          return {
            user:[],
          };
        
      default:
        return state;
    }
  };
  
  export default user;
  
  export const addTodos = (user) => {
    return {
      type: "ADD_TODOS",
      payload: user,
    };
  };
  export const removeTodos = () => {
    return {
      type: "REMOVE_TODOS",
      user:[],
      
    };
  };
  
  
//   export const updateUserName = (name) => {
//     return {
//       type: "UPDATE_USER_NAME",
//       payload: name,
//     };
//   };
  