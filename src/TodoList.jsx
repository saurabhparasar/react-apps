import React from "react";
import Todo from "./Todo";

const TodoList = ({ list, onAdd }) => {
  return (
    <div>
      {list.map((list, index) => (
        <Todo key={index} onAdd={onAdd} list={list} />
      ))}
    </div>
  );
};
export default TodoList;
