import { useDispatch, useSelector } from "react-redux";
import { addTodo, removeTodo} from "../reducers/todo/todo";


function Todoele({ele,index}){
    const dispatch = useDispatch();
    const state = useSelector((state) => {
        return {
          array:  state.todo.array,
        };
      });

      function DeleteTodoApp(){
        
        let newArr = state.array;
        newArr.splice(index,1);
            
          const action = removeTodo(newArr);
          dispatch(action);
      }
    return(
        <div>
            <p>{ele}</p>
            <button onClick={DeleteTodoApp}>Delete</button>

        </div>
    )
}
export default Todoele;
