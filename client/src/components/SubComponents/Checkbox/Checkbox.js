import React from "react";

function Checkbox(props) {
  return (
    <input
      class="form-check-input"
      type="checkbox"
      {...props}
    />
  );
}

export default Checkbox;
