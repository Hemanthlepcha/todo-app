import React from "react";

interface Props {
  checked: boolean;
  onChange: () => void;
  style?:React.CSSProperties
}

const Checkbox: React.FC<Props> = ({ checked, onChange , style}) => {
  return (
    <input type="checkbox" checked={checked} onChange={onChange}  style={style}/>
  );
};

export default Checkbox;
