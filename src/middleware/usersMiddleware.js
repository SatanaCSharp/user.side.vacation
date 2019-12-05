import { takeEvery, call, put } from "redux-saga/effects";
import { USER_PENDING, USER_EDIT_PENDING } from "../constants/actionTypes";
import { getUserRequest, putUserRequest } from "../services/requestService";
import { userRejected, userFulfilled, userEditFulfilled } from "../actions/userActionCreator";
function* getUser(action) {
    try{
        const { payload :{userId, token}} = action;
        const user = yield call(async ()=> await getUserRequest(userId, token));
        yield put(userFulfilled(user))
    } catch(err) {
        yield put(userRejected());
    }
}
function* editUser(action) {
    try{
        const { payload : {userId, token, firstName, lastName, email, hiredDate}} = action;
        const user = yield call(async ()=> await putUserRequest({userId, token, firstName, lastName, email, hiredDate}));
        yield put(userEditFulfilled(user))
    } catch(err) {
        yield put(userRejected());
    }
}

export default function* userRootSaga() {
    yield takeEvery(USER_PENDING, getUser);
    yield takeEvery(USER_EDIT_PENDING, editUser);
}