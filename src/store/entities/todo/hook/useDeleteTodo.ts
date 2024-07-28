import { useRecoilCallback } from "recoil";
import { useDeleteTodoMutation } from "../../../../graphql/types";
import { todosState } from "../atom";

export const useDeleteTodo = () => {
  const [deleteTodoMutaion] = useDeleteTodoMutation();
  const deleteTodo = useRecoilCallback(
    ({ set }) =>
      async (id: string) => {
        const res = await deleteTodoMutaion({
          variables: { id },
        });
        if (res.errors) {
          console.log("Error deleting Todos", res.errors);
          throw res.errors;
        } else {
          set(todosState, (oldTodos) =>
            oldTodos.filter((todo) => todo.id !== id)
          );
        }
      },
    [deleteTodoMutaion]
  );
  return deleteTodo;
};
