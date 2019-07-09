import React from "react";

function CreateButton(props) {
    return(
        <div>
            <span className="create-btn btn btn-primary" {...props} role="button">
                Create
            </span>
        </div>
    )
}

export default CreateButton;