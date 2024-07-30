import { TodoType } from "./../../../../graphql/types/index";
import { useRecoilCallback } from "recoil";
import { useUpsert } from "./useUpsert";

const useTodoResponse = () => {
  const { upsert } = useUpsert();

  const setTodos = useRecoilCallback(
    () => (data: TodoType[]) => {
      data.forEach((d) => {
        upsert(d);
      });
    },
    [upsert]
  );
  return { setTodos };
};

export default useTodoResponse;
