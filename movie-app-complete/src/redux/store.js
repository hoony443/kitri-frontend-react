import {combineReducers, legacy_createStore as createStore , applyMiddleware} from 'redux';
import {logger} from 'redux-logger';
import MovieStore from './MovieStore';


let store;
store = createStore(combineReducers({
    MovieStore,
}), applyMiddleware(logger));

export default store;



// createStore(왜 이렇게 두개??)