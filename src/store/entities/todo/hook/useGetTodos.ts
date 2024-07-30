import { useRecoilCallback } from "recoil";
import { TodoType, useGetTodosQuery } from "../../../../graphql/types";
import { useUpsert } from "./useUpsert";
import useTodoResponse from "./todoResponse";

export const useGetTodos = () => {
  const { upsert } = useUpsert();
  const { setTodos } = useTodoResponse();

  const { refetch: getAllTodoRefetch, loading } = useGetTodosQuery({});

  const getTodos = useRecoilCallback(
    () => async () => {
      const { data, errors } = await getAllTodoRefetch();
      if (errors) {
        throw new Error(`${errors}`);
      }
      if (data?.getTodos) {
        setTodos(data.getTodos as TodoType[]);
      } else {
        setTodos([]);
      }
    },
    [upsert, getAllTodoRefetch]
  );
  return { getTodos, loading };
};
