import { useRecoilCallback } from "recoil";
import {
  CreateTodoMutationVariables,
  useCreateTodoMutation,
} from "../../../../graphql/types";
// import { useUpsert } from "./useUpsert";
import { v4 as uuidv4 } from "uuid";
// import { jwtDecode } from "jwt-decode";
export const useCreateTodo = () => {
  const [createTodoMutation] = useCreateTodoMutation();
  // const { upsert } = useUpsert();

  const createTodo = useRecoilCallback(
    () => async (input: CreateTodoMutationVariables["input"]) => {
      console.log(input);
      const token = localStorage.getItem("token");
      if (!token) {
        console.log("User not found");
      }
      // const decodedToken: string = jwtDecode(token as string);
      // const UserId = decodedToken;
      const id = uuidv4();
      console.log(id);

      const res = await createTodoMutation({
        variables: {
          input,
        },
      });

      if (res.errors) {
        throw res.errors;
      } else {
        // upsert({ ...input, UserId: UserId });
      }
    },
    [createTodoMutation]
  );

  return createTodo;
};
