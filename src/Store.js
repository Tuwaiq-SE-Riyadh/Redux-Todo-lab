import { createStore, combineReducers } from "redux";

import todo from "./Todo";
// { user } === { user: user }
const reducers = combineReducers({ todo});

const store = createStore(reducers);

export default store;
