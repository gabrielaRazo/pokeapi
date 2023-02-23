import { applyMiddleware, createStore } from "redux";
import roootReducers from "./reducer/rootReducers";
import createSagaMiddleware from "redux-saga";
import rootSagas from "./sagas/rootSagas";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(roootReducers, applyMiddleware(sagaMiddleware));

export default store;

sagaMiddleware.run(rootSagas);
