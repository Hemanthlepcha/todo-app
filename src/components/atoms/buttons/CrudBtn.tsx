import React from "react";

import { IoMdAdd } from "react-icons/io";
import { MdDeleteForever } from "react-icons/md";
import { AiOutlineEdit } from "react-icons/ai";
const iconMap: Record<string, React.ReactNode> = {
  add: <IoMdAdd />,
  delete: <MdDeleteForever />,
  edit: <AiOutlineEdit />,
};

interface Props {
  icon: keyof typeof iconMap; // Restrict icon prop to the keys of iconMap
  label: string;
  type: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

const crudBtn: React.FC<Props> = ({ icon, label, style, onClick }) => {
  return (
    <button className="btn" type="submit" style={style} onClick={onClick}>
      <span className="icon" style={{ color: "white" }}>
        {iconMap[icon]}
      </span>
      <span className="label" style={{ color: "white" }}>
        {label}
      </span>
    </button>
  );
};

export default crudBtn;
