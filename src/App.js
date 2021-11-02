import { useState, useEffect } from "react";
import './App.css';
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, removeTodo} from "./reducers/todo/todo";
import Todolist from "./componants/Todolist"




function App() {
  const [todo, setTodo] = useState(' ');
  const dispatch = useDispatch();

  const state = useSelector((state) => {
    return {
      array:  state.todo.array,
    };
  });

useEffect(() => {
  axios
    .get("https://jsonplaceholder.typicode.com/todos/")
    .then((response) =>{
      const action = addTodo(response.data.map((ele)=>ele.title));
    dispatch(action)})
    .catch((error) => console.log(error));
    
},[]);

function Todo(e){
  setTodo(e.target.value)
  console.log(e.target.value);  
}
function AddTodoApp(){
  let d = state.array.slice()
  d.unshift(todo)
      
    const action = addTodo(d);
    dispatch(action);
}
  
  
  return( 
    <div>
      <input onChange={Todo}/>
      <button onClick={AddTodoApp}>Add Todo</button>
   <Todolist/>
   </div> 
  );
 
}

export default App;

