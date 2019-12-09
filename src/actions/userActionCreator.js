import {
    USER_PENDING,
    USER_FULFILLED,
    USER_REJECTED,
    USER_EDIT_FULFILLED,
    USER_EDIT_PENDING,
    USER_EDIT_REJECTED } from "../constants/actionTypes";

export const  userPending = (payload) =>({
    type: USER_PENDING,
    isLoading: true,
    payload
});
export const  userFulfilled = (payload) =>({
    type: USER_FULFILLED,
    isLoading: false,
    payload
});
export const  userRejected = () =>({
    type: USER_REJECTED,
    isLoading: false
});

export const userEditPending = (payload) => ({
    type: USER_EDIT_PENDING,
    isLoading: true,
    payload
});

export const userEditFulfilled = (payload) => ({
    type: USER_EDIT_FULFILLED,
    isLoading: false,
    payload
});

export const userEditRejected = () => ({
    type: USER_EDIT_REJECTED,
    isLoading: false
});