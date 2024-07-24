import React, { useState } from "react";
import Input from "../atoms/inputs/input";
import CRUDBtn from "../atoms/buttons/CrudBtn";

const TodoInput: React.FC = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  };

  const handleAddTodo = () => {
    if (title.trim() !== "" && description.trim() !== "") {
      const newTodo = {
        title,
        description,
        completed: false,
      };
      console.log("Add todo:", newTodo);
      // Clear the inputs after adding
      setTitle("");
      setDescription("");
    }
  };

  return (
    <div>
      <Input
        name="title"
        type="text"
        placeholder="Enter the title"
        value={title}
        onChange={handleTitleChange}
        style={{
          height: "2rem",
          borderTopLeftRadius: "8px",
          borderBottomLeftRadius: "8px",
          borderColor: "#00C9A7",
          width: "20rem",
          maxHeight: "4rem",
        }}
      />
      <Input
        name="description"
        type="text"
        placeholder="Enter the description"
        value={description}
        onChange={handleDescriptionChange}
        style={{
          height: "2rem",

          borderColor: "#00C9A7",
          width: "20rem",
          maxHeight: "4rem",
          marginTop: "8px",
        }}
      />
      <CRUDBtn
        style={{
          background: "#00C9A7",
          height: "2.3rem",
          borderColor: "#00C9A7",
          borderStartEndRadius: "8px",
          borderEndEndRadius: "8px",
          cursor: "pointer",
          marginTop: "8px",
        }}
        label="Add"
        onClick={handleAddTodo}
        icon="add"
      />
    </div>
  );
};

export default TodoInput;
