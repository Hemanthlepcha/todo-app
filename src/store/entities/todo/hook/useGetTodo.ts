import { useRecoilCallback } from "recoil";
import { TodoType, useGetTodosQuery } from "../../../../graphql/types";
import { useUpsert } from "./useUpsert";

export const useGetTodo = (UserId: string) => {
  const { upsert } = useUpsert();

  const { refetch: getAllTodoRefetch } = useGetTodosQuery({});

  const getTodo = useRecoilCallback(
    () => async () => {
      const { data, errors } = await getAllTodoRefetch();
      console.log("data", data);
      const todos = data?.getTodos; //optional chaining for accessing the nested object from data
      if (errors) {
        throw new Error(`${errors}`);
      } else {
        if (Array.isArray(todos)) {
          todos.forEach((todo) => upsert({ ...todo } as TodoType));
        } else {
          console.error("Unexpected format:", data);
        }
      }
    },
    [upsert, getAllTodoRefetch, UserId]
  );
  return getTodo;
};
