import { useRecoilCallback } from "recoil";
import {
  CreateTodoMutationVariables,
  useCreateTodoMutation,
} from "../../../../graphql/types";
import { useUpsert } from "./useUpsert";
import { jwtDecode } from "jwt-decode";
import { todoType } from "../type";

export const useCreateTodo = () => {
  const [createTodoMutation] = useCreateTodoMutation();
  const { upsert } = useUpsert();

  const createTodo = useRecoilCallback(
    () => async (input: CreateTodoMutationVariables["input"]) => {
      console.log("createTodo", input);
      const token = localStorage.getItem("token");
      if (!token) {
        console.log("User not found");
      }
      const decodedToken: { id: string } = jwtDecode(token as string);
      const UserId = decodedToken.id;

      // console.log("UserId", UserId);

      const res = await createTodoMutation({
        variables: {
          input,
        },
      });
      console.log("Error from hook", res);

      if (res.errors) {
        console.log("Error from hook", res.errors);
        throw res.errors;
      } else {
        console.log("TOdo reached here");
        const todo: todoType = {
          ...input,
          UserId,
          ...(input.id && { id: input.id as string }),
          completed: input.completed as boolean,
        };
        upsert(todo);
        console.log("upsert Todo", todo);
      }
    },
    [createTodoMutation]
  );

  return createTodo;
};
