import React from "react";

const Todo = ({ name, model, quantity }) => {
  return (
    <div>
      <span>{name}</span>
      <span>{model}</span>
      <span>{quantity}</span>
    </div>
  );
};
export default Todo;
