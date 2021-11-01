import { createStore, combineReducers } from "redux";
import todos from "./todos/todos";

const red = combineReducers( {todos} );
const store = createStore(red);

export default store;
