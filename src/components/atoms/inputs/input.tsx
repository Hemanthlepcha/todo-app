import React from 'react';
// import './input.css'

interface Props {
  name?: string;
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  style?: React.CSSProperties;
}

const Input: React.FC<Props> = ({ name, type, placeholder, value, onChange, style }) => {
  return (
    <input  className='input '
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      style={style}
    />
  );
}

export default Input;
