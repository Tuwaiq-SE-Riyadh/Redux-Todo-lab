import {useDispatch} from 'react-redux';
import { deleteTodo } from '../reducers/action';

const Todo=({todo})=>{
    const dispatch = useDispatch();

return (
<div>

<p>{todo.title}</p>

<button
onClick={()=>{
    const action =deleteTodo(todo.id)
    dispatch(action)
}}>
Delete 
</button>

</div>
)

}

export default Todo;