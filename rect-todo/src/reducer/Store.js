import { createStore, combineReducers } from "redux";

import List from "./list/List";

const reducers = combineReducers({ List });

const store = createStore(reducers);

export default store;
