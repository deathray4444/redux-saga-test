import { applyMiddleware, createStore } from "redux";
import rootReducer, { rootSaga } from "./rootReducer";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(logger, sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
