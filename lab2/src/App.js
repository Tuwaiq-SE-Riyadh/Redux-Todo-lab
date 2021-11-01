import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from 'react';
import axios from 'axios';
import {addTodo, removeTodo} from "./reducers/todos/todos";



function App() {
  const dis = useDispatch();
  
  const state = useSelector((state) => {
    return { todos: state.todos.payload };  });


  const delete_todo = (id) =>{
    dis(removeTodo(state,id));
  }
  

  useEffect(() => {
    axios.all([
      axios.get('https://jsonplaceholder.typicode.com/todos/')
    ])
    .then(r => {
      dis(addTodo(r[0].data))
      });
    },[]);


  return (

  <div className="d0">

{
  state.todos === undefined ? '': 
    state.todos.map(function(e, index){
   return (<div  key={index} id="dto"><p>{e.id}- {e.title}</p> 
    <button type="button" onClick={() =>{
      delete_todo(e.id)
    }}>Delete</button> </div>)})

}

    </div>
  );
}

export default App;
