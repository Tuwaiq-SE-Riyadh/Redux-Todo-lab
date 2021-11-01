import "./App.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addtodo, removetodo } from "./components/todo/todo";
import { useState ,useEffect } from "react";

function App() {
  const [todo1, setTodo] = useState([]);
  const [id, setId] = useState(0);

  const dispatch = useDispatch();

  const state = useSelector((state) => {
    return {
      todo: state.todo.todo,
    };
  });
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos/")
      .then((response) => { 
        setTodo(response.data) 
      console.log(response.data) })
      .catch((error) => console.log(error));
    },[]);

    let todoEl

    const selectTodo=(e)=>{
      todoEl=e.target.value
      console.log(todoEl);
    }
    const getTodo=()=>{
      const newTODO = {
        todo: todoEl
      };
      const action = addtodo(newTODO);
      dispatch(action);

    };
    const removeEl = ()=>{
      dispatch(removetodo());
    }

console.log(todo1)
  return (
    <><div className="App">
      <select onChange={selectTodo}>
        {todo1.map((element) => {
          return <option>
            {element.title}
          </option>;
        })} </select>
      <button type="button" onClick={getTodo}>ADD TO-DO </button>

      <p> todo: {state.todo.todo}</p>
      <button type='button' onClick={removeEl}>REMOVE</button>

    </div>
    
    </>

  );
}

export default App;
