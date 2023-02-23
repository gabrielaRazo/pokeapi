import { takeLatest, put, call } from "redux-saga/effects";
import * as dashboardActions from "../actions/dashboardActions";
import { testEventCall } from "../services/dashboardServices";

function* getTest(action) {
    try {
        console.log(action);
        const response = yield call(testEventCall);
        if (response.status === 200) {
            yield put({ type: dashboardActions.TEST_ACTION_SUCCESS });
        } else {
            yield put({ type: dashboardActions.TEST_ACTION_FAILURE });
        }
    } catch (error) {
        yield put({ type: dashboardActions.TEST_ACTION_FAILURE });
    }
}
export function* getTestSaga() {
    yield takeLatest(dashboardActions.TEST_ACTION_REQUEST, getTest);
}
