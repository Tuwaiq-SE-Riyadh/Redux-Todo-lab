export const addTodo = (todos)=>{
return {
    type: "ADD_TODO",
    payload:todos,
}
}

export const deleteTodo = (todoId)=>{
    return {
        type: "DELETE_TODO",
        payload:todoId,
    }
    }

    


