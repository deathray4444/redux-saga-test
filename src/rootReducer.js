import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import reducer from "./redux/reducer";
import { counterSaga } from "./redux/saga";
import { reducer as formreducer } from "redux-form";

const rootReducer = combineReducers({
  reducer,
  form: formreducer,
});

export function* rootSaga() {
  yield all([counterSaga()]);
}

export default rootReducer;
