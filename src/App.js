import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { addtodo, clearUser, updateUserName } from "./reducers/todo/todo";

import List from "./Components/List";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const [stateList, setStateList] = useState([]);

  const dispatch = useDispatch();

  const state = useSelector((state) => {
    return {
      todo: state.todo.payload,
    };
  });
  
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos/")
      .then((response) => {
        setTodoList(response.data);
        console.log(response.data);

        dispatch(addtodo(response.data[0]));
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {state.todo.map(function (e) {
          return (
            (
              <p>
                id: {console.log("rnosnbvpn")}
                {e.id}
              </p>
            ),
            (<p>title: {e.title}</p>)
          );
        })}
      </header>
    </div>
  );
}

export default App;
