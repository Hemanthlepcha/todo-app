import React, { useEffect, useState } from "react";
import NavBar from "./navBar";
import { useUser } from "../../store/entities/user/hook/useUser";
import Todo from "./Todo";
import { useTodos } from "../../store/entities/todo/hook/useTodos";
import { AddTodo } from "./CRUD/AddTodo";
import "./dnd.css";
import {
  DragDropContext,
  Droppable,
  DropResult,
  Draggable,
} from "@hello-pangea/dnd";
import { TodoType } from "../../graphql/types";

const ContentPage: React.FC = () => {
  const { todos } = useTodos();

  const [todoDndPos, setTodoDndPos] = useState<TodoType[]>([]);

  //displaying the current userName
  const { getCurrentUser } = useUser();
  const user = getCurrentUser();
  const userName = user?.firstName;

  console.log(todoDndPos);

  useEffect(() => {
    setTodoDndPos([...todos]);
  }, [todos]);

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) {
      return; // Exit if there's no destination
    }
    const items = Array.from(todoDndPos);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setTodoDndPos(items);
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
        <AddTodo />

        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="1" type="todo">
            {(provided) => (
              <div
                ref={provided.innerRef}
                className="dnd"
                {...provided.droppableProps}
              >
                {/* <div className="dnd"> */}
                {todoDndPos.map((todo, index) => (
                  <Draggable
                    draggableId={`${todo.id}`}
                    key={todo.id}
                    index={index}
                  >
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <Todo key={index} todo={todo} />
                      </div>
                    )}
                  </Draggable>
                ))}
                {/* </div> */}

                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    </div>
  );
};

export default ContentPage;
