import { useDispatch, useSelector } from "react-redux";
import { useState,useEffect } from "react";
import './App.css';
import axios from 'axios';
import {addTodo ,removeTodo} from "./Todo";



function App() {

  const [Todo, setTodo] = useState();

  const dispatch = useDispatch();

  const state = useSelector((state) => {
    return {
      user: state.todo.todo,
    };
  });


useEffect(() => {
  axios
    .get("https://jsonplaceholder.typicode.com/todos/")
    .then((response) => dispatch(addTodo(response.data)))
    .catch((error) => console.log(error));
},[]);



  return (
    <div className="App">
    {state.user.map((element, index) => {

      return(

<>

      <p>{element.id}</p>
      <p>{element.title}</p>
      
        {/* <button
        onClick={() => {
          dispatch(addTodo(todo));
        }}
      >
        Add ToDo
      </button> */}

      <button
        onClick={() => {
        dispatch(removeTodo(element));
       }} >
          
       Remove Todo
      </button>

      </>

)
}
)
} 
      )
    </div>
  );
}

export default App;


