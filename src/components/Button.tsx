import React, { useState } from "react";

export const Button: React.FC<{
  increment: number;
  onHandleClick: (increment: number) => void;
}> = ({ increment, onHandleClick }) => {
  const handleIncrement = () => {
    onHandleClick(increment);
  };

  return <button onClick={handleIncrement}>{increment}+</button>;
};
