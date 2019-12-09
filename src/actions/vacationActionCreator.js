import {
    VACATIONS_PENDING,
    VACATIONS_REJECTED,
    VACATIONS_FULFILLED,
    VACATION_SHOW_PENDING,
    VACATION_SHOW_FULFILLED,
    VACATION_SHOW_REJECTED,
    VACATION_CREATE_PENDING,
    VACATION_CREATE_FULFILLED,
    VACATION_CREATE_REJECTED,
    VACATION_DELETE_PENDING,
    VACATION_DELETE_FULFILLED,
    VACATION_DELETE_REJECTED,
    VACATION_UPDATE_PENDING,
    VACATION_UPDATE_FULFILLED,
    VACATION_UPDATE_REJECTED,
} from '../constants/actionTypes';


export const  vacationsPending = (payload) =>({
    type: VACATIONS_PENDING,
    isLoading: true,
    payload
});
export const  vacationsFulfilled = (payload) =>({
    type: VACATIONS_FULFILLED,
    isLoading: false,
    payload
});
export const  vacationsRejected = () =>({
    type: VACATIONS_REJECTED,
    isLoading: false
});


export const  vacationsShowPending = (payload) =>({
    type: VACATION_SHOW_PENDING,
    isLoading: true,
    payload
});
export const  vacationsShowFulfilled = (payload) =>({
    type: VACATION_SHOW_FULFILLED,
    isLoading: false,
    payload
});
export const  vacationsShowRejected = () =>({
    type: VACATION_SHOW_REJECTED,
    isLoading: false
});


export const  vacationCreatePending = (payload) =>({
    type: VACATION_CREATE_PENDING,
    isLoading: true,
    payload
});
export const  vacationCreateFulfilled = (payload) =>({
    type: VACATION_CREATE_FULFILLED,
    isLoading: false,
    payload
});

export const  vacationCreateRejected = () =>({
    type: VACATION_CREATE_REJECTED,
    isLoading: false
});


export const  vacationsUpdatePending = (payload) =>({
    type: VACATION_UPDATE_PENDING,
    isLoading: true,
    payload
});
export const  vacationsUpdateFulfilled = (payload) =>({
    type: VACATION_UPDATE_FULFILLED,
    isLoading: false,
    payload
});
export const  vacationsUpdateRejected = () =>({
    type: VACATION_UPDATE_REJECTED,
    isLoading: false
});

export const  vacationDeletePending = (payload) =>({
    type: VACATION_DELETE_PENDING,
    isLoading: true,
    payload
});
export const  vacationDeleteFulfilled = (payload) =>({
    type: VACATION_DELETE_FULFILLED,
    isLoading: false,
    payload
});
export const  vacationDeleteRejected = () =>({
    type: VACATION_DELETE_REJECTED,
    isLoading: false
});
