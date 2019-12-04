import { SET_USER, SET_ERRORS, CLEAR_ERRORS, LOADING_UI } from '../types'
import Axios from 'axios'

//dispatch is requie for async code
export const loginUser = (userData, history) => (dispatch) => {
    dispatch({ type: LOADING_UI });
    Axios.post('/login', userData)
        .then(res => {
            //login successful
            console.log(res)
            const FBIdToken = `Bearer ${res.data.token}`
            //token saved to local storage
            localStorage.setItem('FBIdToken', FBIdToken)
            //we need to put the token in the header using axios default headers, so we do not need to put in the header every single time
            Axios.defaults.headers.common['Authorization'] = FBIdToken
            dispatch({ type: CLEAR_ERRORS })
            dispatch(getUserData())
            //push them to the '/board'
            history.push('/board')
        })
        .catch(err => {
            //we want to keep track of the errors to return to the user interface
            dispatch({
                type: SET_ERRORS,
                payload: err.response.data
            })
        })
}

export const getUserData = () => (dispatch) => {
    Axios.get('/user')
        .then(res => {
            //dispatch a SET_USER action with the userdata as payload
            dispatch({
                type: SET_USER,
                payload: res.data
            })
        })
        .catch(err => console.log(err))
}