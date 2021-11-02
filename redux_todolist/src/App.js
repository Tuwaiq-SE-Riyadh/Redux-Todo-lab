import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from "react-redux";
import user from "./reducers/user/user";

import {addTodos ,removeTodos} from "./reducers/user/user";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function App() {

  const [list, setList] = useState([]);
  useEffect(() => {
    console.log("I am in jj useEffect")
      axios
        .get("https://jsonplaceholder.typicode.com/todos/")
        .then((response) => setList(response.data))
        .catch((error) => console.log(error));
      
       
    },[]);
  
    const dispatch = useDispatch();
    console.log("the list")
    console.log(list)
    
      function add () {
      

        const action = addTodos(list);
        dispatch(action);
      
    };
    function remove () {
   
      const action = removeTodos();
      dispatch(action);
    }

    

  // 
  
// 
  const state = useSelector((state) => {
    return {
      user: state.user.user,
    };
  });
  console.log("the state")
  console.log(state.user)


  return (
    <div className="App">
      <h1>ToDo List</h1>
      <ul>
      {state.user.map((ele,index)=>{
        return<li><h4>id :{ele.id} ,
        title{ele.title}</h4>
        </li>
      })}
       </ul>
      <button onClick={add} >Add todo List</button>
      <button onClick={remove} >Removw todo List</button>
     
    </div>
  );
}

export default App;
