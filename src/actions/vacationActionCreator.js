import {
    VACATIONS_PENDING,
    VACATIONS_REJECTED,
    VACATIONS_FULFILLED,
    VACATIONS_SHOW_FULFILLED,
    VACATION_CREATE_FULFILLED,
    VACATION_UPDATE_FULFILLED,
    VACATION_DELETE_FULFILLED,
} from '../constants/actionTypes';


export const  vacationsPending = (payload) =>({
    type: USER_PENDING,
    isLoading: true,
    payload
});
export const  vacationsFulfilled = (payload) =>({
    type: VACATIONS_FULFILLED,
    isLoading: false,
    payload
});
export const  vacationsRejected = () =>({
    type: USER_REJECTED,
    isLoading: false
});


export const  vacationsUpdatePending = (payload) =>({
    type: USER_PENDING,
    isLoading: true,
    payload
});
export const  vacationsUpdateFulfilled = (payload) =>({
    type: USER_FULFILLED,
    isLoading: false,
    payload
});
export const  vacationsUpdateRejected = () =>({
    type: USER_REJECTED,
    isLoading: false
});


export const  vacationsShowPending = (payload) =>({
    type: USER_PENDING,
    isLoading: true,
    payload
});
export const  vacationsShowFulfilled = (payload) =>({
    type: USER_FULFILLED,
    isLoading: false,
    payload
});
export const  vacationsShowRejected = () =>({
    type: USER_REJECTED,
    isLoading: false
});


export const  vacationsDeletePending = (payload) =>({
    type: USER_PENDING,
    isLoading: true,
    payload
});
export const  vacationsDeleteFulfilled = (payload) =>({
    type: USER_FULFILLED,
    isLoading: false,
    payload
});
export const  vacationsDeleteRejected = () =>({
    type: USER_REJECTED,
    isLoading: false
});


export const  vacationsCreatePending = (payload) =>({
    type: USER_PENDING,
    isLoading: true,
    payload
});
export const  vacationsCreateFulfilled = (payload) =>({
    type: USER_FULFILLED,
    isLoading: false,
    payload
});
export const  vacationsCreateRejected = () =>({
    type: USER_REJECTED,
    isLoading: false
});
