import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import baseActions from './base/actions';
import baseReducer from './base/reducer';


const actions = {
    base: baseActions
};

const rootStore = combineReducers({ 
    base: baseReducer
});

const setupStore = store => createStore(
    store,
    applyMiddleware(thunkMiddleware)
);

export default {
    actions,
    rootStore,
    setupStore
};