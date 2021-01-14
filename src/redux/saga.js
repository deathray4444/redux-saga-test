import { delay, put, take, takeEvery, takeLatest } from "redux-saga/effects";
import { decrease, increase } from "./aciton";
import { INCREASE_ASYNC, DECREASE_ASYNC } from "./actiontype";

function* increaseSaga() {
  yield delay(5000);
  yield put(increase());
}
function* decreaseSaga() {
  yield delay(4000);
  yield put(decrease());
}

export function* counterSaga() {
  console.log("beforesaga");
  yield takeEvery(INCREASE_ASYNC, increaseSaga);
  console.log("hello saga");
  yield takeLatest(DECREASE_ASYNC, decreaseSaga);
}
