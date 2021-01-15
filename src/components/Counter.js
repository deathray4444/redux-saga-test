import React from "react";
import { Field, Form, reduxForm } from "redux-form";

const Counter = ({
  number,
  onIncrease,
  onDecrease,
  onChange,
  onIncrease2,
  input,
  onSubmit,
  onSubmit2,
}) => {
  return (
    <div>
      <h1>{number}</h1>

      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>

      <form onSubmit={onSubmit}>
        <input value={input} onChange={onChange} />

        <button type="submit">증가</button>
      </form>
      <form onSubmit={onSubmit2}>
        <input value={input} onChange={onChange} />

        <button type="submit">감소</button>
      </form>
    </div>
  );
};

export default Counter;
