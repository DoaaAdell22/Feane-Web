import { combineReducers, createStore } from 'redux';
import Reducer from './auth/Reducer';
import ReducerLanguage from './language/Reducer';

const rootReducer = combineReducers({
    auth:Reducer,
    lang:ReducerLanguage
})

const Store = createStore(rootReducer);


export default Store