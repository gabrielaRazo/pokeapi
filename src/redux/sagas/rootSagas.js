//File that wrap every saga file
import { all, fork } from "redux-saga/effects";
import * as dashboardSaga from "./dashboardSaga";

export default function* rootSaga() {
    var allSagas = Object.assign(dashboardSaga);

    yield all([...Object.values(allSagas)].map(fork));
}
