import { combineReducers, createStore, applyMiddleware } from 'redux';
import injectMiddleware from 'redux-inject';
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
    applyMiddleware(
        injectMiddleware({
            test: 'ha'
        }),
        thunkMiddleware
    )
);

export default {
    actions,
    rootStore,
    setupStore
};