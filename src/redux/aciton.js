import {
  INCREASE,
  DECREASE,
  INCREASE_ASYNC,
  DECREASE_ASYNC,
} from "./actiontype";

export const increase = () => ({ type: INCREASE });
export const decrease = () => {
  return {
    type: DECREASE,
  };
};

export const increaseAsync = () => ({ type: INCREASE_ASYNC });
export const decreaseAsync = () => ({ type: DECREASE_ASYNC });
