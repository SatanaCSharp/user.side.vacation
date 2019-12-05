
import { USER_FULFILLED, USER_EDIT_FULFILLED } from '../constants/actionTypes';
export const user = (state={}, {type, payload}) => {
    switch(type) {
        case USER_FULFILLED:
            return {
                   ...state,
                   ...payload
                };
        case USER_EDIT_FULFILLED:
            return {
                ...state,
                ...payload
            }
        default:
            return state;
    }
}
