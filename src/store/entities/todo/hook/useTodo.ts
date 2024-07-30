import { useRecoilValue } from "recoil";
import { todoResponse } from "../../../../graphql/types/todo";
import { todoState } from "../atom";

type ReturnType = {
  todo: todoResponse;
};

export const useTodo = (id: string): ReturnType => {
  console.log("id", id);
  const todo = useRecoilValue(todoState(id));
  console.log("from state", todo);
  return { todo };
};
