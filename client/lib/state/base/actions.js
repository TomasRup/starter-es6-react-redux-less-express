import _ from 'lodash';

import actionTypes from '../actionTypes';
import utils from '../utils';


const someAction = () => {
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