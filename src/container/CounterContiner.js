import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Counter from "../components/Counter";
import { counterSaga } from "../redux/saga";
import {
  increase,
  decrease,
  increaseAsync,
  decreaseAsync,
} from "./../redux/aciton";

const CounterContiner = () => {
  const counter = useSelector((state) => state.reducer, []);
  console.log(counter);

  const dispatch = useDispatch();

  const onIncrease = () => {
    dispatch(increaseAsync());
    console.log("되냐");
  };
  const onDecrease = () => {
    dispatch(decreaseAsync());
  };

  return (
    <div>
      <Counter
        number={counter}
        onIncrease={onIncrease}
        onDecrease={onDecrease}
      />
    </div>
  );
};

export default CounterContiner;
