import {
  INCREASE,
  DECREASE,
  INCREASE2,
  DECREASE2,
  INCREASE_ASYNC,
  INCREASE_ASYNC2,
  DECREASE_ASYNC,
  DECREASE_ASYNC2,
  CHANGE_INPUT,
  CHANGE_INPUT2,
} from "./actiontype";
import { createAction } from "redux-actions";

// export const increase = () => ({ type: INCREASE });
// export const decrease = () => {type: DECREASE
// };

export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

export const increaseAsync = createAction(INCREASE_ASYNC);
export const decreaseAsync = createAction(DECREASE_ASYNC);

export const changeInput = (input) => ({ type: CHANGE_INPUT, payload: input });

export const increase2 = (text) => ({ type: INCREASE2, payload: text });
export const decrease2 = (text) => ({ type: DECREASE2, payload: text });

export const increaseAsync2 = createAction(INCREASE_ASYNC2);
export const decreaseAsync2 = createAction(DECREASE_ASYNC2);
