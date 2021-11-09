import {useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import axios from 'axios';
import {addTodo} from '../reducers/action';
import Todo from './Todo'

const Todos=()=>{
const dispatch = useDispatch();

    const state=useSelector((state)=>{
        console.log(state);
        return {
            todos:state.todoReducer.todos,
        }
    })

    useEffect(() => {
        axios
          .get("https://jsonplaceholder.typicode.com/todos")
          .then((response) => {
            const action = addTodo(response.data);
            dispatch(action);
          })
          .catch((err) => {
            console.log(err);
          });
      }, []);

return (

<div>
    <h1>Todo List</h1>
        {state.todos.map((element)=>{
            return <Todo todo={element} key={element.id}/>
        })
    }
   
</div>

)
}

export default Todos;