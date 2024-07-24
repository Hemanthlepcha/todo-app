import React from "react";
// import "./btn.css";

interface Props {
  label?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
}

const authBtn: React.FC<Props> = ({ style, label, onClick }) => {
  return (
    <button className="btn" style={style} onClick={onClick}>
      {label}
    </button>
  );
};

export default authBtn;
