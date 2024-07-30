import { useDeleteTodo } from "../../../store/entities/todo/hook/useDeleteTodo";
import CrudBtn from "../../atoms/buttons/CrudBtn";
interface Props {
  id: string;
}
export const DeleteBtn: React.FC<Props> = ({ id }) => {
  const deleteTodo = useDeleteTodo();

  const handleDelete = async (id: string) => {
    try {
      await deleteTodo(id);
      window.alert("Todo Deleted");
    } catch (error) {
      window.alert("Error deleting");
    }
  };

  return (
    <CrudBtn
      style={{}}
      label="Delete"
      onClick={() => handleDelete(id)}
      icon="delete"
      type="submit"
    />
  );
};
