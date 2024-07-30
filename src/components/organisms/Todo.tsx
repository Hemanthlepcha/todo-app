import { memo, useState } from "react";
import { todoResponse } from "../../graphql/types/todo";
import { DeleteBtn } from "./CRUD/DeleteTodo";
import { EditTodo } from "./CRUD/EditTodo";
import Checkbox from "../atoms/checkBox/checked";

type Props = {
  todo: todoResponse;
};

const Todo: React.FC<Props> = memo<Props>(({ todo }) => {
  const [checked, setChecked] = useState(false);

  return (
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
      <div>
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
          {todo.title}
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <EditTodo
          id={todo.id}
          description={todo.description}
          completed={checked}
        />
        <Checkbox checked={checked} onChange={() => setChecked(!checked)} />

        <DeleteBtn id={todo.id} />
      </div>
    </div>
  );
});

export default Todo;

Todo.displayName = "Todo";
