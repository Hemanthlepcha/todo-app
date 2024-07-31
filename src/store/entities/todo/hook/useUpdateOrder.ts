import { useRecoilCallback } from "recoil";
import { useUpdateTodoOrderMutation } from "../../../../graphql/types";
import { todosState } from "../atom";

export const useUpdateTodo = () => {
  const [updateOrderMutation] = useUpdateTodoOrderMutation();

  const updateTodoOrder = useRecoilCallback(
    ({ set }) =>
      async (input: { id: string; order: number }) => {
        const res = await updateOrderMutation({
          variables: {
            id: input.id,
            order: input.order,
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
                    order: input.order,
                  }
                : todo
            )
          );
        }
      },
    [updateOrderMutation]
  );

  return updateTodoOrder;
};
