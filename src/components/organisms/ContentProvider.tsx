import { useEffect } from "react";
import { useGetTodos } from "../../store/entities/todo/hook/useGetTodos";
import { createProvider } from "../../shared/createProvider";

type ContextProps = {
  loading: boolean;
};
const useValue = (): ContextProps => {
  const { getTodos, loading } = useGetTodos();
  useEffect(() => {
    const fetchTodos = async () => {
      await getTodos();
    };
    fetchTodos();
  }, []);
  return {
    loading,
  };
};
useValue.__PROVIDER__ = "todo-app/src/components/organisms/ContentProvider";
export const { Provider, useContext: useStatsPageContext } =
  createProvider(useValue);
