import React from "react";

interface Props {
  style?: React.CSSProperties;
  id: string;
  todoTitle: string;
  todoDescription: string;
}

const displayPara: React.FC<Props> = ({
  style,
  id,
  todoTitle,
  todoDescription,
}) => {
  return (
    <div style={{ backgroundColor: "#B1F49F" }}>
      <b>
        <p style={style} id={id}>
          {todoTitle}
        </p>
      </b>

      <p style={{}}>{todoDescription}</p>
    </div>
  );
};
export default displayPara;
