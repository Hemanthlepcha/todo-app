import React, { useState } from "react";
// import DisplayTodo from "../molucules/displayTodo";
import TodoInput from "../molucules/addTodo";
import DisplayTodo from "../molucules/displayTodo";
import NavBar from "./navBar";
import { useUser } from "../../store/entities/user/hook/useUser";
import { useCreateTodo } from "../../store/entities/todo/hook/useCreateTodo";
import { v4 as uuidv4 } from "uuid";

const ContentPage: React.FC = () => {
  const createTodo = useCreateTodo();

  //displaying the current userName
  const { getCurrentUser } = useUser();
  const user = getCurrentUser();
  const userName = user?.firstName;

  // handeling inputs
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [completed, setCompleted] = useState(false);

  const handleAddTodo = async () => {
    console.log("handleaddTodo clicked");
    // e.preventDefault();
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
    <div>
      <NavBar
        displayAuth={false}
        displayWelcome={true}
        userName={userName ?? ""}
      />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "10px",
        }}
      >
        <TodoInput
          titleValue={title}
          disValue={description}
          onTitleChange={handleTitleChange}
          onDisChange={handleDescriptionChange}
          onButtonClick={handleAddTodo}
        />
        <DisplayTodo />
      </div>
    </div>
  );
};
export default ContentPage;
