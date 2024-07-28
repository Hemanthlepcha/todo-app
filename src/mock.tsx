// import { useQuery, gql } from "@apollo/client";
import CreateTodoComponent from "./components/organisms/createTodoTest";
import { useGetTodo } from "./store/entities/todo/hook/useGetTodo";
import { todosState } from "./store/entities/todo/atom";
import { useRecoilValue } from "recoil";
import { useEffect } from "react";

function Appp() {
  const getTodos = useGetTodo("userId");
  const todos = useRecoilValue(todosState);
  useEffect(() => {
    getTodos().catch((error) => {
      console.error("Error fetching todos:", error);
    });
  }, [getTodos]);
  console.log("getTodos:", todos);
  return (
    <>
      <CreateTodoComponent />
      <h1>Hello Todos</h1>
      <ul>
        {todos?.map((todo) => (
          <li key={todo.id}>
            <ul>{todo.title}</ul>

            {todo.description}
            {todo.completed ? ".....✓" : ".....x"}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Appp;
