import React from "react";

interface Props {
  label: string;
  id: string;
  style?: React.CSSProperties; 
}

export const Inputlabel: React.FC<Props> = ({ label, id, style }) => {
  return <label style={style} htmlFor={id}>{label}</label>;
};
