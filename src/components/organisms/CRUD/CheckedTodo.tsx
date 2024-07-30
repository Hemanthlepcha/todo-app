import { useState } from "react";
import Checkbox from "../../atoms/checkBox/checked";

export const CheckedTodo = () => {
  const [checked, setChecked] = useState(false);

  function handleCheckboxChange() {
    setChecked(true);
  }

  return (
    <div>
      <Checkbox checked={checked} onChange={() => handleCheckboxChange()} />
    </div>
  );
};
