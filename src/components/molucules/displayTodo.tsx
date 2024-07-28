import React, { useEffect, useState } from "react";
import CRUDBtn from "../atoms/buttons/CrudBtn";
import Checkbox from "../atoms/checkBox/checked";
import { useRecoilValue } from "recoil";
import { todosState } from "../../store/entities/todo/atom";
import { useGetTodo } from "../../store/entities/todo/hook/useGetTodo";
import { useDeleteTodo } from "../../store/entities/todo/hook/useDeleteTodo";
import { useUpdateTodo } from "../../store/entities/todo/hook/useEditTodo";

const DisplayTodo: React.FC = () => {
  // State to track editing status, text, and checked status for each todo
  const [todoStates, setTodoStates] = useState<{
    [key: string]: {
      isEditing: boolean;
      todoTitle: string;
      todoDescription: string;
      isChecked: boolean;
    };
  }>({});
  const deleteTodo = useDeleteTodo();
  const updateTodo = useUpdateTodo();

  // Fetching the todos using the hook
  const getTodos = useGetTodo("userId");
  const todos = useRecoilValue(todosState);

  useEffect(() => {
    getTodos().catch((error) => {
      console.error("Error fetching todos:", error);
    });
  }, [getTodos]);

  // Initialize states for todos
  useEffect(() => {
    const initialTodoStates: {
      [key: string]: {
        isEditing: boolean;
        todoTitle: string;
        todoDescription: string;
        isChecked: boolean;
      };
    } = {};
    todos.forEach((todo) => {
      initialTodoStates[todo.id] = {
        isEditing: false,
        todoTitle: todo.title,
        todoDescription: todo.description,
        isChecked: false,
      };
    });
    setTodoStates(initialTodoStates);
  }, [todos]);

  // Handle contenteditable changes
  const handleContentEditableChange = (
    id: string,
    event: React.FormEvent<HTMLDivElement>
  ) => {
    const [description] = event.currentTarget.textContent?.split("\n") || [
      "",
      "",
    ];
    setTodoStates((prevState) => ({
      ...prevState,
      [id]: {
        ...prevState[id],
        // todoTitle: title,
        todoDescription: description,
      },
    }));
  };

  // Handle edit click
  const handleEditClick = (id: string) => {
    setTodoStates((prevState) => ({
      ...prevState,
      [id]: {
        ...prevState[id],
        isEditing: true,
      },
    }));
  };

  // Handle save click
  const handleSaveClick = async (id: string) => {
    const { todoDescription, isChecked } = todoStates[id];
    try {
      await updateTodo({
        id,
        description: todoDescription,
        completed: isChecked,
      });
      setTodoStates((prevState) => ({
        ...prevState,
        [id]: {
          ...prevState[id],
          isEditing: false,
        },
      }));
    } catch (error) {
      console.error("Error updating todo:", error);
    }
  };

  // Handle checkbox change
  const handleCheckboxChange = (id: string) => {
    setTodoStates((prevState) => ({
      ...prevState,
      [id]: {
        ...prevState[id],
        isChecked: !prevState[id].isChecked,
      },
    }));
  };

  // Handle delete (for demonstration, not functional)
  const handleDelete = async (id: string) => {
    try {
      await deleteTodo(id);
      window.alert("Todo Deleted");
    } catch (error) {
      window.alert("Error deleting");
    }
  };

  return (
    <div
      style={{
        backgroundColor: "#c3e8e2",
        marginTop: "9px",
        borderRadius: "14px",
        padding: "20px",
      }}
    >
      {todos.map((todo) => (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            marginTop: "29px",
            alignItems: "center",
            backgroundColor: "#E5FFFA",
            borderRadius: "12px",
            padding: "5px",
            minWidth: "35rem",
            justifyContent: "space-between",
          }}
          key={todo.id}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                fontWeight: "bold",
                borderRadius: "4px",
                textTransform: "uppercase",
                fontFamily: "sans-serif",
                fontSize: "15px",
                color: "#545479",
              }}
            >
              {todoStates[todo.id]?.todoTitle}
            </div>
            <div
              contentEditable={todoStates[todo.id]?.isEditing}
              onInput={(event) => handleContentEditableChange(todo.id, event)}
              style={{
                textDecoration: todoStates[todo.id]?.isChecked
                  ? "line-through"
                  : "none",
                color: "black",
                borderBottom: todoStates[todo.id]?.isEditing
                  ? "1px solid black"
                  : "none",
                paddingBottom: "5px",
                fontSize: "16px",
                flexGrow: 1,
                cursor: todoStates[todo.id]?.isEditing ? "text" : "pointer",
                fontStyle: "italic",
                fontSizeAdjust: "12px",
                marginLeft: "2em",
                alignItems: "center",
              }}
              suppressContentEditableWarning={true}
            >
              {todoStates[todo.id]?.todoDescription}
            </div>
          </div>
          <div>
            {" "}
            <Checkbox
              checked={todoStates[todo.id]?.isChecked}
              onChange={() => handleCheckboxChange(todo.id)}
            />
            {todoStates[todo.id]?.isEditing ? (
              <CRUDBtn
                style={{
                  marginLeft: "14px",
                  background: "#4FFBDF",
                  height: "27px",
                  cursor: "pointer",
                  borderRadius: "5px",
                  color: "white",
                }}
                label="Save"
                onClick={() => handleSaveClick(todo.id)}
                icon="save"
                type="submit"
              />
            ) : (
              <CRUDBtn
                style={{
                  marginLeft: "4px",
                  background: "#00AA98",
                  height: "27px",
                  cursor: "pointer",
                  borderRadius: "15px",
                  borderColor: "#00AA98",
                }}
                label=""
                onClick={() => handleEditClick(todo.id)}
                icon="edit"
                type="submit"
              />
            )}
            <CRUDBtn
              style={{
                marginLeft: "4px",
                background: "#344B48",
                height: "27px",
                cursor: "pointer",
                borderRadius: "5px",
              }}
              label="Delete"
              onClick={() => handleDelete(todo.id)}
              icon="delete"
              type="submit"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default DisplayTodo;
