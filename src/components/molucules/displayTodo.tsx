import React, { useState } from "react";
import DisplayPara from "../atoms/displayPara/displayPara";
import CRUDBtn from "../atoms/buttons/CrudBtn";
import Checkbox from "../atoms/checkBox/checked";

const DisplayTodo: React.FC = () => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [todoText, setTodoText] = useState<string>(
    "Molecules: Molecules are combinations of atoms that form more complex components."
  );
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodoText(event.target.value);
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div
      className="bg-[#c3e8e2]"
      style={{
        display: "flex",
        flexDirection: "row",
        marginTop: "12px",
        alignItems: "center",
        backgroundColor: "#c3e8e2",
        borderRadius: "12px",
        padding: "10px",
      }}
    >
      {isEditing ? (
        <input
          type="text"
          value={todoText}
          onChange={handleInputChange}
          style={{
            // textDecoration: isChecked ? "line-through" : "none",
            color: "black",
            borderBottom: "1px solid black",
            paddingBottom: "5px",
            fontSize: "20px",
            flexGrow: 1,
          }}
        />
      ) : (
        <DisplayPara
          id="todo-1"
          style={{
            textDecoration: isChecked ? "line-through" : "none",
            color: "black",
            borderBottom: "1px solid black",
            paddingBottom: "5px",
            fontSize: "20px",
            flexGrow: 1,
          }}
          todoInput={todoText}
        />
      )}
      <Checkbox checked={isChecked} onChange={handleCheckboxChange} />

      {isEditing ? (
        <CRUDBtn
          style={{
            marginLeft: "4px",
            background: "#4FFBDF",
            height: "27px",
            cursor: "pointer",
            borderRadius: "5px",
          }}
          label="Save"
          onClick={handleSaveClick}
          icon="save"
        />
      ) : (
        <CRUDBtn
          style={{
            marginLeft: "4px",
            background: "#4FFBDF",
            height: "27px",
            cursor: "pointer",
            borderRadius: "5px",
            borderColor: "white",
          }}
          label="Edit"
          onClick={handleEditClick}
          icon="edit"
        />
      )}
      <CRUDBtn
        style={{
          marginLeft: "4px",
          background: "red",
          height: "27px",
          cursor: "pointer",
          borderRadius: "5px",
        }}
        label="Delete"
        onClick={() => console.log("Deleted todo")}
        icon="delete"
      />
    </div>
  );
};

export default DisplayTodo;
