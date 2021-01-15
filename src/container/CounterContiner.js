import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import Counter from "../components/Counter";
import { counterSaga } from "../redux/saga";
import {
  increase,
  decrease,
  decrease2,
  increase2,
  increaseAsync,
  decreaseAsync,
  increaseAsync2,
  decreaseAsync2,
  changeInput,
  changeInput2,
  onDecrease2,
} from "./../redux/aciton";

const CounterContiner = () => {
  const { count, input } = useSelector((state) => state.reducer, []);

  console.log(count);
  console.log(input);

  const dispatch = useDispatch();

  const onIncrease = () => {
    dispatch(increaseAsync());
  };
  const onIncrease2 = (text) => {
    dispatch(increase2(text));
  };
  const onDecrease2 = (text) => {
    dispatch(decrease2(text));
  };
  const onDecrease = () => {
    dispatch(decreaseAsync());
  };
  const onChangeInput = (input) => dispatch(changeInput(input));

  const onChange = (e) => onChangeInput(e.target.value);
  console.log(onChange);

  const onSubmit = (e) => {
    e.preventDefault();

    onIncrease2(input);

    console.log("되냐");
    onChangeInput("");
  };
  const onSubmit2 = (e) => {
    e.preventDefault();

    onDecrease2(input);

    console.log("되냐");
    onChangeInput("");
  };

  return (
    <div>
      <Counter
        number={count}
        onIncrease={onIncrease}
        onDecrease={onDecrease}
        onChange={onChange}
        onIncrease2={onIncrease2}
        input={input}
        onSubmit={onSubmit}
        onSubmit2={onSubmit2}
      />
    </div>
  );
};

export default CounterContiner;
