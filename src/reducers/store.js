import { createStore, combineReducers } from "redux";

import todo from "./todo/todo";

const reducers = combineReducers({ todo });

const store = createStore(reducers);

export default store;
