import { createStore, combineReducers } from "redux";

import todos from "./todos";

const reducers = combineReducers({ todos });

const store = createStore(reducers);

export default store;