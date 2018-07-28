import { combineReducers } from 'redux';
import * as type from '../action/type';
import storage from 'redux-persist/es/storage'
import {persistReducer} from 'redux-persist'

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
        case type.LOGOUT:
            return {
                ...state,
                user: action.payload
            };
        default:
            return { ...state };
    }
};
const userconfig = {
    key: 'user',
    storage,
    debug: false
}
export default combineReducers({
    login: persistReducer(userconfig, login),
});
