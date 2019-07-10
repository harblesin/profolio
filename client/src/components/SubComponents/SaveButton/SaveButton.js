import React from "react";

function SaveButton(props) {
    return(
        <div>
            <span className="save-btn btn btn-primary" {...props} role="button">
                Save
            </span>
        </div>
    )
}

export default SaveButton;