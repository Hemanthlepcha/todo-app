import { useRecoilCallback } from "recoil";
import { useUpdateTodoMutation } from "../../../../graphql/types";
import { todosState } from "../atom";
import { UpdateInput } from "../../../../graphql/types";

export const useUpdateTodo = () => {
  const [updateTodoMutation] = useUpdateTodoMutation();

  const updateTodo = useRecoilCallback(
    ({ set }) =>
      async (input: UpdateInput) => {
        const res = await updateTodoMutation({
          variables: {
            input,
          },
        });

        if (res.errors) {
          console.log("Error updating todo", res.errors);
          throw res.errors;
        } else {
          set(todosState, (oldTodos) =>
            oldTodos.map((todo) =>
              todo.id === input.id
                ? {
                    ...todo,
                    title: input.title ?? todo.title,
                    description: input.description ?? todo.description,
                    completed: input.completed ?? todo.completed,
                  }
                : todo
            )
          );
        }
      },
    [updateTodoMutation]
  );

  return updateTodo;
};
