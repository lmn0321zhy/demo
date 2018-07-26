/**
 * Created by 叶子 on 2017/7/30.
 */
import { combineReducers } from 'redux';
import * as type from '../action/type';

const login = (state = {}, action) => {
    switch (action.type) {
        case type.LOGIN_SUCCESS:
            return {
                ...state,
                user: action.payload,
                error: null
            }
        case type.LOGIN_FAILURE:
            return {
                ...state,
                error: action.payload,
                user: null
            };
        case type.LOGIN_LOADING:
            return {
                ...state,
                loading: action.payload
            };
        default:
            return { ...state };
    }
};

export default combineReducers({
    login
});
