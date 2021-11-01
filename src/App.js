import "./App.css";
import {useEffect, useState} from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from "react-redux";
import { addUser, clearUser} from "./reducers/user/user";


function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => {
    return {
      // user: state.user.user,
      Todo: state.Todo.Todo,
    };
  });
  // console.log( state.counter.filter((element, i)=>{
  //   return element.id !=1
  // }));
  useEffect( () => {
    axios
    .get(` https://jsonplaceholder.typicode.com/todos/`)
    .then(function (response) {
      dispatch(addUser(response.data));
    //  setdata(response.data);
    // //  const newUser = {
    // //    name: data,
    // //  };
   
    //  const action = addUser(data);
   
  
    })
   },
   [],
 );


// console.log(state.counter);
  return (
    <div className="App">
      <p>  {state.Todo.map((e,index)=>{
        return(
          <div>
            <p> {e.title}  </p>  
      <button onClick={() => { dispatch(clearUser(e));}} >
        X
      </button>
          </div>
        )
      })}</p>



      
      

     
    </div>
  );
}
 
export default App;
