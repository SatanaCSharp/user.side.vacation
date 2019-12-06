import {
    VACATIONS_FULFILLED,
    VACATION_CREATE_FULFILLED,
    VACATION_UPDATE_FULFILLED,
    VACATION_DELETE_FULFILLED,
    VACATION_SHOW_FULFILLED,
    VACATIONS_PENDING,
    VACATION_SHOW_PENDING,
    VACATION_CREATE_PENDING,
    VACATION_UPDATE_PENDING,
    VACATION_DELETE_PENDING,
} from '../constants/actionTypes';
export const vacations = (state={}, {type, payload, isLoading}) => {
    switch(type) {
        case VACATIONS_PENDING:
            return {
                   ...state,
                   isLoading
                };
        case VACATIONS_FULFILLED:
            return {
                   ...state,
                   isLoading,
                   ...payload
                };
        case VACATION_SHOW_PENDING:
            return {
                    ...state,
                    isLoading
                };
        case VACATION_SHOW_FULFILLED:
            return {
                    ...state,
                    isLoading,
                    ...payload
                };
        case VACATION_CREATE_PENDING:
            return {
                   ...state,
                   isLoading
                };
        case VACATION_CREATE_FULFILLED:
            return {
                   ...state,
                   isLoading,
                   ...payload
                };
        case VACATION_UPDATE_PENDING:
            return {
                   ...state,
                   isLoading
                };
        case VACATION_UPDATE_FULFILLED:
            return {
                   ...state,
                   isLoading,
                   ...payload
                };
        case VACATION_DELETE_PENDING:
            return {
                   ...state,
                   isLoading,
                };
        case VACATION_DELETE_FULFILLED:
            return {
                   isLoading,
                   ...payload
                };
        default:
            return state;
    }
};
