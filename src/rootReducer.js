import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import reducer from "./redux/reducer";
import { counterSaga } from "./redux/saga";

const rootReducer = combineReducers({
  reducer,
});

export function* rootSaga() {
  yield all([counterSaga()]);
}

export default rootReducer;
