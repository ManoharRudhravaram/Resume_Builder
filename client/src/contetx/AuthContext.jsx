import React, { createContext, useContext, useReducer } from 'react'
import authReducer from '../Reducer/authReducer';
import { DATA, ERROR, LOADING } from '../Action/action';
import instance from '../config/axios';

export let authContext = createContext();

function AuthContext({ children }) {
    let initialState = {
        loading: false,
        data: {},
        error: ""
    }
    let [state, dispatch] = useReducer(authReducer, initialState);
    async function loginHandler(data) {
        try {
            dispatch({ type: LOADING });
            let response = await instance.post('/auth/v1/signin', data);
            dispatch({ type: DATA, payload: response });
        } catch (error) {
            dispatch({ type: ERROR, payload: error.message });
        }
    }
    return (
        <authContext.Provider value={{ ...state, loginHandler }}>
            {children}
        </authContext.Provider>
    )
}
export let useAuth=()=>{
    return useContext(authContext);
}
export default AuthContext