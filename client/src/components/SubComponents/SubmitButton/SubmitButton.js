import React from "react";

function SubmitButton(props) {
    return(
        <div>
            <span className="submit-btn btn btn-primary" {...props} role="button" tabIndex="0">
                Submit
            </span>
        </div>
    )
}

export default SubmitButton;