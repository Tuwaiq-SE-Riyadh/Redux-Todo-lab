const initialState = {
    list:[]
  };

const List = (state = initialState, {type, payload})=> {
    switch (type) {
        case "FETCH":
            return{
                payload
            }
        case "DELETE":
            return{
                payload
            }
        default:
            return state;
    }
}

export const add = (todo) => {
    return {
      type: "FETCH",
      payload:  todo
    }
  };
  
export const dele = (todo) => {
    return {
        type: "DELETE",
        payload: todo
    }
  };
  
  export default List;