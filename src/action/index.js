/**
 * Created by 叶子 on 2017/7/30.
 */
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
    console.log('loginLoading', loading)
    return {
        type: type.LOGIN_LOADING,
        payload: loading
    }
}
export const login = () => dispatch => {
    dispatch(loginLoading(true));
    return httpServer.get('/mock/login.json',
        {},
        (response) => { dispatch(loginLoading(false)); dispatch(loginSuccess(response)) },
        (error) => { dispatch(loginLoading(false)); dispatch(loginFailure(error)) })
}