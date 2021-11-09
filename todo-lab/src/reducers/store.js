import {createStore,combineReducers} from 'redux';

import todoReducer from './reducer';

const reducer=combineReducers({todoReducer});
const store=createStore(reducer);

export default store;