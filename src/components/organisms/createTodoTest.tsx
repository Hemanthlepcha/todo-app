import { useState } from "react";
import { useCreateTodo } from "../../store/entities/todo/hook/useCreateTodo";
import { v4 as uuidv4 } from "uuid";

const CreateTodoComponent = () => {
  const createTodo = useCreateTodo();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [completed, setCompleted] = useState(false); // default to false

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
      setCompleted(false); // reset to false
    } catch (error) {
      console.error("Error creating todo:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Description:
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Completed:
          <input
            type="checkbox"
            checked={completed}
            onChange={(e) => setCompleted(e.target.checked)}
          />
        </label>
      </div>
      <button type="submit">Create Todo</button>
    </form>
  );
};

export default CreateTodoComponent;
