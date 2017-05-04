import _ from 'lodash';

import actionTypes from '../actionTypes';


const initialState = {
};

export default (state = initialState, action) => {

    switch(action.type) {
        case actionTypes.SOME_ACTION:
        default:
            return state;
    }

};