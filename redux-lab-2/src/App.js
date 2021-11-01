import './App.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { addTodos, removeTodos } from "./todos";
import { useDispatch, useSelector } from "react-redux";

function App() {

  const [todos, setTodos] = useState([]);

  const dispatch = useDispatch();

  const state = useSelector((state) => {
    return {
      user: state.todos.todos,
    };
  });

  useEffect(() => {
     axios
    .get("https://jsonplaceholder.typicode.com/todos/")
    .then((response) =>dispatch(addTodos(response.data)) )
    .catch((error) => console.log(error));
  },[])
  return (
    <div className="App">
      
      {state.user.map((element, index) => {

       return (
      <>

      <p>{element.id}</p>
      <p>{element.title}</p>
      
       {/* <button
        onClick={() => {
          dispatch(addTodos(todos));
        }}
      >
        Add ToDos
      </button> */}

      <button
        onClick={() => {
        dispatch(removeTodos(element));
       }}
           >
       Remove ToDos
      </button>

      </>
)
}
)
}     
    </div>
  );
}

export default App;

