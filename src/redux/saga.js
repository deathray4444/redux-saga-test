import {
  delay,
  put,
  take,
  takeEvery,
  takeLatest,
  select,
} from "redux-saga/effects";
import { decrease, increase, increase2, changeInput } from "./aciton";
import {
  INCREASE_ASYNC,
  DECREASE_ASYNC,
  INCREASE_ASYNC2,
  CHANGE_INPUT2,
} from "./actiontype";

function* increaseSaga() {
  yield delay(2000);
  yield put(increase());
  const num = yield select((state) => state.count); // state는 스토어 상태 의미
  console.log(`현재 값 ${num}`);
}
function* increaseSaga2() {
  yield delay(2000);
  yield put(increase2());
}
function* decreaseSaga() {
  yield delay(2000);
  yield put(decrease());
}

export function* counterSaga() {
  console.log("beforesaga");
  yield takeEvery(INCREASE_ASYNC, increaseSaga);
  yield takeEvery(INCREASE_ASYNC2, increaseSaga2);

  console.log("hello saga");
  yield takeLatest(DECREASE_ASYNC, decreaseSaga);
}
