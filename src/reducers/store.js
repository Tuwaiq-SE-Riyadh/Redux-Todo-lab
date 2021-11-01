import { createStore, combineReducers } from "redux";

import array from "./todo/todo";

const reducers = combineReducers({ array });

const store = createStore(reducers);

export default store;