import { useRecoilCallback } from "recoil";
import { todoState } from "../atom";
import { todoType } from "../type";

export const useUpsert = () => {
  const upsert = useRecoilCallback(
    ({ set }) =>
      (input: todoType) => {
        console.log("Upsert Input", input);
        if (input != null && input.UserId != null) {
          set(todoState(input.UserId), (prevTodo) => ({
            ...prevTodo,
            ...input,
          }));
        }
      },
    []
  );
  return { upsert };
};
