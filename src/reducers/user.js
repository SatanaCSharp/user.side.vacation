import {USER_FULFILLED, USER_EDIT_FULFILLED, USER_PENDING, USER_EDIT_PENDING} from '../constants/actionTypes';
export const user = (state={}, {type, payload, isLoading}) => {
    switch(type) {
        case USER_PENDING:
            return {
                ...state,
                isLoading
            };
        case USER_FULFILLED:
            return {
                   ...state,
                    isLoading,
                   ...payload
                };
        case USER_EDIT_PENDING:
            return {
                ...state,
                isLoading
            };
        case USER_EDIT_FULFILLED:
            return {
                ...state,
                isLoading,
                ...payload
            };
        default:
            return state;
    }
};
