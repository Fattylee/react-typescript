import React, { useState } from "react";
import { Button } from "./Button";

export const Counter: React.FC = () => {
  const [count, setCount] = useState(0);
  const onHandleClick = (amount: number) => {
    setCount(count + amount);
  };
  return (
    <>
      <h1>Counter App</h1>
      <h2>Count: {count}</h2>
      <Button increment={1} onHandleClick={onHandleClick} />
      <Button increment={10} onHandleClick={onHandleClick} />
      <Button increment={100} onHandleClick={onHandleClick} />
      <Button increment={1000} onHandleClick={onHandleClick} />

      <br />
      <br />
      <div>
        <button onClick={() => setCount(0)}>Clear count</button>
      </div>
    </>
  );
};
