# Redux Todo Lab

using redux create todo list it should be able to add todo and remove todo
* Install redux using npm install
* Import redux
* Create redux store
* Create actions for `addTodo` and `removeTodo`
* Create reducer `todos` that will return the todo list based on the action you send
* use axios to get the todo list from this api `https://jsonplaceholder.typicode.com/todos/` 
* Using action `addTodo` send the data from the api to the reducer
* Create dispatch that send the actions to the reducer (using useDispatch)
* Using useSelector return the todos state
* map through the todos state and show the todos list 
* Create button remove for every todo when clicking it should dispatch an action 