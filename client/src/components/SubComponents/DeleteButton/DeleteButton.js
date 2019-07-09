import React from "react";

function DeleteButton(props) {
    return(
        <div>
            <span className="delete-btn btn btn-danger" {...props} role="button">
                Delete
            </span>
        </div>
    )
}

export default DeleteButton;