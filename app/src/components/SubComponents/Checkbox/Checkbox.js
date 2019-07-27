import React from "react";

function Checkbox(props) {
  return (
    <div class="form-check">
      <input
        class="form-check-input"
        type="checkbox"
        value=""
        id="defaultCheck1"
      />
      <label class="form-check-label" for="defaultCheck1">
        Default checkbox
      </label>
    </div>
  );
}

export default Checkbox;
