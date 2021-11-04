import "./App.css";
import axios from "axios"
import { useDispatch, useSelector } from "react-redux";
import { addtodos, removetodos } from "./reducer/todos/todo";
import { useState, useEffect } from "react";

function App() {
  const [todos, setTodos] = useState([]);


  const dispatch = useDispatch();
  const state = useSelector((state) => {

    return {
      user: state.todo.todos
    };
  });


  var url = " https://jsonplaceholder.typicode.com/todos/";
  useEffect(() => {
    axios.get(url)
    .then(response => dispatch(addtodos(response.data)))
      .catch((error) => console.log(error))
  }, [])




  return (
    <div className="app">


      {state.user.map((element, index) => {
        return (
        <div className="info">
          
          <p>{element.id}</p>
          <p>{element.title}</p>
          <p>{element.completed}</p>
          
        

  <button 
onClick={()=>{
  dispatch(removetodos (element))
}}>Remove todo

</button>

    </div>
 )
}
      )
}
</div>


 ) ;

}
  

export default App;
