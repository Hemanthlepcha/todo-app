import React from "react";
import Input from "../atoms/inputs/input";
import CrudBtn from "../atoms/buttons/CrudBtn";

interface Props {
  titleValue: string;
  disValue: string;
  onTitleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onDisChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onButtonClick?: () => void;
}
const TodoInput: React.FC<Props> = ({
  titleValue,
  onTitleChange,
  disValue,
  onDisChange,
  onButtonClick,
}) => {
  return (
    <div>
      <Input
        name="title"
        type="text"
        placeholder="Enter the title"
        value={titleValue}
        onChange={onTitleChange}
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
        value={disValue}
        onChange={onDisChange}
        style={{
          height: "2rem",

          borderColor: "#00C9A7",
          width: "20rem",
          maxHeight: "4rem",
          marginTop: "8px",
        }}
      />
      <CrudBtn
        style={{
          background: "#00C9A7",
          height: "2.3rem",
          borderColor: "#00C9A7",
          borderTopLeftRadius: "0",
          borderEndStartRadius: "0",
          marginLeft: "0",
          cursor: "pointer",
          marginTop: "8px",
        }}
        label="Add"
        icon="add"
        type="submit"
        onClick={onButtonClick}
      />
    </div>
  );
};

export default TodoInput;
