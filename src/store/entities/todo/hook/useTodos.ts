import { useRecoilValue } from "recoil";
import { todoResponse } from "../../../../graphql/types/todo";
import { todosState } from "../atom";

type ReturnType = {
  todos: todoResponse[];
};

export const useTodos = (): ReturnType => {
  const todos = useRecoilValue(todosState);
  return { todos };
};
