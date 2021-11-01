import { createStore, combineReducers } from "redux";

import Todo from "./user/user";

const reducers = combineReducers({ Todo });

const store = createStore(reducers);

export default store;
