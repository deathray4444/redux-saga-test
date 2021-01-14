import { act } from "react-dom/test-utils";
import { INCREASE, DECREASE } from "./actiontype";

const initialState = 0;

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE:
      return state + 1;
    case DECREASE:
      return state - 1;
    default:
      return state;
  }
};

export default reducer;
