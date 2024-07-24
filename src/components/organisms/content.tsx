import React from "react";
import DisplayTodo from "../molucules/displayTodo";
import TodoInput from "../molucules/addTodo";

const contentPage: React.FC = () => {
  return (
    <div>
      <TodoInput />
      <DisplayTodo />
    </div>
  );
};
export default contentPage;
