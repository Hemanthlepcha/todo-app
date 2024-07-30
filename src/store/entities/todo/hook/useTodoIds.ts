import { useRecoilValue } from "recoil";
import { todoIdsState } from "../atom";

type Result = {
  todoIds: string[];
};

export const useGetTodoByUserId = (): Result => {
  const todoIds = useRecoilValue(todoIdsState);
  return {
    todoIds,
  };
};
