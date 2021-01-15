import {
  INCREASE,
  DECREASE,
  INCREASE2,
  DECREASE2,
  CHANGE_INPUT,
} from "./actiontype";

const initialState = {
  input: "",
  count: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREASE:
      return {
        ...state,
        count: state.count - 1,
      };
    case CHANGE_INPUT:
      return {
        ...state,
        input: action.payload,
      };
    case INCREASE2:
      return {
        ...state,
        count: state.count + Number(action.payload),
      };
    case DECREASE2:
      return {
        ...state,
        count: state.count - Number(action.payload),
      };

    default:
      return state;
  }
};

export default reducer;
