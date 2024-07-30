import { useState } from "react";
import { useCreateTodo } from "../../../store/entities/todo/hook/useCreateTodo";
import TodoInput from "../../molucules/TodoInput";
import { v4 as uuidv4 } from "uuid";

export const AddTodo = () => {
  const createTodo = useCreateTodo();

  // console.log(todos);

  // handeling inputs
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [completed, setCompleted] = useState(false);

  const handleAddTodo = async () => {
    console.log("handleaddTodo clicked");
    const id = uuidv4();
    try {
      await createTodo({
        id,
        title,
        description,
        completed,
      });
      setTitle("");
      setDescription("");
      setCompleted(false);
    } catch (error) {
      console.error("Error creating todo:", error);
    }
  };
  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };
  const handleDescriptionChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDescription(event.target.value);
  };
  return (
    <TodoInput
      titleValue={title}
      disValue={description}
      onTitleChange={handleTitleChange}
      onDisChange={handleDescriptionChange}
      onButtonClick={handleAddTodo}
    />
  );
};
