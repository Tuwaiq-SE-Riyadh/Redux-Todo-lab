const initialState ={
    todos:[],
}

const todoReducer = (state = initialState,{type,payload})=>{
    switch (type) {
        case "ADD_TODO":
           return{
            todos:payload, 
           } 

           case "DELETE_TODO":
            return{
             todos:state.todos.filter((element)=>{
                 return element.id !== payload
             }), 
            } 
           
    
        default:
          return state;
    }
}

export default todoReducer;