import React from "react";

import { IoMdAdd } from "react-icons/io";
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

const iconMap: Record<string, React.ReactNode> = {
  add: <IoMdAdd />,
  delete: <MdDeleteForever />,
  edit: <FaEdit />,
};

interface Props {
  icon: keyof typeof iconMap; // Restrict icon prop to the keys of iconMap
  label: string;

  style?: React.CSSProperties;
  onClick?: () => void;
}

const CRUDBtn: React.FC<Props> = ({ icon, label, style, onClick }) => {
  return (
    <button className="btn" type="submit" style={style} onClick={onClick}>
      <span className="icon">{iconMap[icon]}</span>
      <span className="label">{label}</span>
    </button>
  );
};

export default CRUDBtn;
