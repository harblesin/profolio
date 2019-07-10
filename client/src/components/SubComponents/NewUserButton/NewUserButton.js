import React from "react";

function NewUserButton(props) {
    return(
        <div>
            <span className="newuser-btn btn btn-primary" {...props} role="button">
                New User
            </span>
        </div>
    )
}

export default NewUserButton;