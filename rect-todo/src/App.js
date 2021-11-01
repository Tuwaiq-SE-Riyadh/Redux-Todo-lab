import "./App.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { add, dele } from "./reducer/list/List";
import {useEffect } from "react";


function App() {

const dispatch = useDispatch();
const state = useSelector((state) => {
  return {
    list: state.List.payload,
  };
});

useEffect( () => {
  axios
    .get('https://jsonplaceholder.typicode.com/todos/')
    .then(function (response) {
    dispatch(add(response.data));
    })
},[],);

const deleting = (id)=>{    
  let newList = [];
  for(let i = 0 ; i < state.list.length ; i++){
    if(state.list[i].id !== id ){
      newList.push(state.list[i])
    }
  dispatch(dele(newList));
  }}


  let resultTODOList;
  if (state.list !== undefined) {
    resultTODOList = state.list.map(function(e, index){
      return (<div className="fixd">
              <p>{e.id} : {e.title}</p> 
              <button type="button" onClick={() =>{deleting(e.id)}}>remove</button>
           </div>)
          })
  }
 
  return (
  <div className="App">
    <h1>To Do List</h1>

    {resultTODOList}
    </div>


  );
}

export default App;
