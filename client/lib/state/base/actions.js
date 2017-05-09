import _ from 'lodash';

import actionTypes from '../actionTypes';
import utils from '../utils';


const someAction = () => injected => {
    console.log("Testing injected", injected.test);
    return (dispatch, getState) => {
        return utils
            .apiGet('/api/feature1')
            .then(responseJson => {
                console.log(responseJson);
            });
    }
}


export default {
    someAction
}