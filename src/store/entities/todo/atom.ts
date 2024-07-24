import { createState } from "../../utils/createState";
import { selectorFamily } from "recoil";
import { todoType } from "./type";

const key = (str: string) => `src/store/entities/todo/${str}`;
export const initialState = (): todoType => ({
  id: "",
  title: "",
  description: "",
  completed: false,
  UserId: "",
});

export const { state: todoState, listState: todosState } = createState({
  key,
  initialState,
});

export const todoOfUser = selectorFamily<todoType[], string>({
  key: key("usersTodo"),
  get:
    (userId) =>
    ({ get }) => {
      const todo = get(todosState);
      return todo.filter((todo) => todo.UserId === userId);
    },
});
