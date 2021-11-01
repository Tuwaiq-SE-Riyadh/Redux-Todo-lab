const initialState =  [];


const todos  = (state = initialState, { type, payload }) => {
  switch (type) {


    case "ADD_TO_DO":
      return {payload}

      case "REMOVE_TO_DO":
        return {payload}

    default:
      return state;
  }
};



export const addTodo  = (List) => {
  return {type: "ADD_TO_DO",payload: List};
};

export const removeTodo  = (List,id) => {

  let list2 = [];
  for(let i = 0 ; i < List.todos.length ; i++){
    if(List.todos[i].id !== id ){list2.push(List.todos[i])}
  }
  return {type: "REMOVE_TO_DO",payload: list2};
};

export default todos;

