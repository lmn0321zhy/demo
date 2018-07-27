import * as type from './type';
import httpServer from 'api/httpServer';


export function loginSuccess(data) {
    console.log('loginSuccess', data)
    return {
        type: type.LOGIN_SUCCESS,
        payload: data
    }
}
export function loginFailure(error) {
    console.log('loginFailure', error)
    return {
        type: type.LOGIN_FAILURE,
        payload: error
    }
}
export function loginLoading(loading) {
    return {
        type: type.LOGIN_LOADING,
        payload: loading
    }
}
export function logout(data) {
    return {
        type: type.LOGOUT,
        payload: null
    }
}
export const login = (type, params) => dispatch => {
    if (type === 'LOGIN') {
        dispatch(loginLoading(true));
        return httpServer.get('/mock/login.json',
            params || {},
            (response) => { dispatch(loginLoading(false)); dispatch(loginSuccess(response)) },
            (error) => { dispatch(loginLoading(false)); dispatch(loginFailure(error)) })
    } else if(type === 'LOGOUT'){
        return httpServer.get('/mock/logout.json',
            params || {},
            (response) => { dispatch(logout(response)) },
            (error) => { console.log(error) })
    }
}