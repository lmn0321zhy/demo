import { combineReducers } from 'redux';
import * as type from '../action/type';
import storage from 'redux-persist/es/storage'
import {persistReducer} from 'redux-persist'

const loginInfo = (state = {}, action) => {
    switch (action.type) {
        case type.LOGIN_SUCCESS:
            return {
                ...state,
                userInfo: action.payload,
                loginerror: null
            }
        case type.LOGIN_FAILURE:
            return {
                ...state,
                loginerror: action.payload,
                userInfo: null
            };
        case type.LOGOUT_SUCCSSS:
            return {
                ...state,
                userInfo: null,
                loginerror:null
            };
        default:
            return { ...state };
    }
};
const userconfig = {
    key: 'loginInfo',
    storage,
    debug: false,
    blacklist: ['status']
}
export default combineReducers({
    loginInfo: persistReducer(userconfig, loginInfo),
});
