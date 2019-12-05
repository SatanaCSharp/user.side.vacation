
import {
    VACATIONS_FULFILLED,
    VACATIONS_SHOW_FULFILLED,
    VACATION_CREATE_FULFILLED,
    VACATION_UPDATE_FULFILLED,
    VACATION_DELETE_FULFILLED,
} from '../constants/actionTypes';
export const vacations = (state={}, {type, payload, isLoading}) => {
    switch(type) {
        case VACATIONS_FULFILLED:
            return {
                   ...state,
                   isLoading,
                   ...payload
                };
        case VACATIONS_SHOW_FULFILLED:
            return {
                    ...state,
                    isLoading,
                    ...payload
                }
        case VACATION_CREATE_FULFILLED:
            return {
                   ...state,
                   isLoading,
                   ...payload
                };
        case VACATION_UPDATE_FULFILLED:
            return {
                   ...state,
                   isLoading,
                   ...payload
                };
        case VACATION_DELETE_FULFILLED:
            return {
                   isLoading,
                   ...payload
                };
        default:
            return state;
    }
}
