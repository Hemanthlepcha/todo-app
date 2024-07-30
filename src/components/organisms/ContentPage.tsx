import React from "react";
import NavBar from "./navBar";
import { useUser } from "../../store/entities/user/hook/useUser";
import Todo from "./Todo";
import { useTodos } from "../../store/entities/todo/hook/useTodos";
import { AddTodo } from "./CRUD/AddTodo";

const ContentPage: React.FC = () => {
  const { todos } = useTodos();
  // console.log(todos);
  //displaying the current userName
  const { getCurrentUser } = useUser();
  const user = getCurrentUser();
  const userName = user?.firstName;

  return (
    <div>
      <NavBar
        displayAuth={false}
        displayWelcome={true}
        userName={userName ?? ""}
      />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "10px",
        }}
      >
        <AddTodo />
        {todos.map((todo, index) => (
          <Todo key={index} todo={todo} />
        ))}
      </div>
    </div>
  );
};
export default ContentPage;
