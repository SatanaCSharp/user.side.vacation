import { takeEvery, call, put } from "redux-saga/effects";
import {
    VACATION_CREATE_PENDING,
    VACATION_DELETE_PENDING,
    VACATION_UPDATE_PENDING,
    VACATIONS_PENDING
} from "../constants/actionTypes";
import {
    vacationCreateFulfilled,
    vacationCreateRejected, vacationDeleteFulfilled, vacationDeleteRejected,
    vacationsFulfilled,
    vacationsRejected, vacationsUpdateFulfilled, vacationsUpdateRejected
} from "../actions/vacationActionCreator";
import {
    deleteVacationRequest,
    getVacationsRequest,
    postVacationsRequest,
    putVacationRequest
} from "../services/requestService";
import {userPending} from "../actions/userActionCreator";


function* getVacations(action) {
    try {
        const { payload :{userId, token}} = action;
        const vacations = yield call(async ()=> getVacationsRequest(userId, token));
        yield put(vacationsFulfilled(vacations));
    }catch (err) {
        yield put(vacationsRejected);
    }
}
function* createVacation(action) {
    try {
        const { payload :{userId, token, startDate, endDate, description}} = action;
        const vacations = yield call(async ()=> postVacationsRequest({userId, token, startDate, endDate, description}));
        yield put(vacationCreateFulfilled(vacations));
        yield put(userPending({userId, token}));
    }catch (err) {
        yield put(vacationCreateRejected);
    }
}
function* updateVacation(action) {
    try {
        const { payload :{userId, token,vacationId, startDate, endDate, description}} = action;
        const vacations = yield call(async ()=> putVacationRequest({userId, token, vacationId, startDate, endDate, description}));
        yield put(vacationsUpdateFulfilled(vacations));
        yield put(userPending({userId, token}));
    }catch (err) {
        yield put(vacationsUpdateRejected);
    }
}
function* deleteVacation(action) {
    try {
        const { payload :{userId, token,vacationId}} = action;
        const vacations = yield call(async ()=> deleteVacationRequest({userId, token, vacationId}));
        yield put(vacationDeleteFulfilled(vacations));
        yield put(userPending({userId, token}));
    }catch (err) {
        yield put(vacationDeleteRejected);
    }
}

export default function* vacationsRootSaga() {
    yield takeEvery(VACATIONS_PENDING, getVacations);
    yield takeEvery(VACATION_CREATE_PENDING, createVacation);
    yield takeEvery(VACATION_UPDATE_PENDING, updateVacation);
    yield takeEvery(VACATION_DELETE_PENDING, deleteVacation);
}
