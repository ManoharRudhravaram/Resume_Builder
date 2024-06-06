import { DATA, ERROR, LOADING } from "../Action/action";

function authReducer(state, action) {
    switch (action.type) {
        case LOADING:
            return { ...state, loading: true };
        case DATA:
            return { ...state, loading: false, data: action.payload };
        case ERROR:
            return { ...state, loading: false, error: action.payload }
        default:
            return state;
    }
}

export default authReducer