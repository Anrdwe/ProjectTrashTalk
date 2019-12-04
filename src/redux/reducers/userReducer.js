import { SET_USER, SET_ERRORS, CLEAR_ERRORS, LOADING_UI, SET_AUTHENTICATED, SET_UNAUTHENTICATED } from '../types'
import Axios from 'axios'

//this is not the global, but what is stored in user: userReducer in the ../store.js reducers object
const initialState = {
    authenticated: false,
    credentials: {},
}

export default function(state = initialState, action) {
    switch(action.type){
        case SET_AUTHENTICATED:
            return {
                ...state,
                authenticated: true
            };
        case SET_UNAUTHENTICATED:
            return initialState;
        case SET_USER:
            return {
                authenticated: true,
                //this spread will bind credentials to credentials
                ...action.payload
            }
        default:
            return state;
    }
}