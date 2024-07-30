import { useState } from "react";
import { useUpdateTodo } from "../../../store/entities/todo/hook/useEditTodo";
import CrudBtn from "../../atoms/buttons/CrudBtn";
import "./CSS/editTodo.css";
import "./CSS/editTodoInput.css";
interface Props {
  id: string;
  description: string;
  completed: boolean;
}

export const EditTodo: React.FC<Props> = ({ description, id, completed }) => {
  const updateTodo = useUpdateTodo();
  const [edit, setEdit] = useState(false);
  const [editDescription, setDescription] = useState(description);

  const handleEditClick = () => {
    setEdit(!edit);
  };
  // Handle save click
  const handleEditSave = async (id: string) => {
    try {
      await updateTodo({
        id,
        description: editDescription,
        completed,
      });
    } catch (error) {
      console.error("Error updating todo:", error);
    }
    setEdit(false);
  };

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      {edit ? (
        <input
          // className="edit-input"
          style={{
            paddingBottom: "5px",
            fontSize: "14px",
            flexGrow: 1,
            fontStyle: "italic",
            // fontSize: "12px",
            marginLeft: "-20em",
          }}
          type="text"
          onChange={(e) => setDescription(e.target.value)}
          value={editDescription}
        />
      ) : (
        <div
          className="edit-todo"
          style={{
            textDecoration: completed ? "line-through" : "none",
          }}
        >
          {editDescription}
        </div>
      )}
      <div>
        {edit ? (
          <CrudBtn
            label="Save"
            onClick={() => handleEditSave(id)}
            icon="save"
            type="submit"
            style={{}}
          />
        ) : (
          <CrudBtn
            label=""
            onClick={() => handleEditClick()}
            icon="edit"
            type="submit"
            style={{}}
          />
        )}
      </div>
    </div>
  );
};
