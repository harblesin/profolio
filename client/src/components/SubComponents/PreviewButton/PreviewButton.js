import React from "react";

function PreviewButton(props) {
    return (
        <div>
            <span className="preview-btn btn btn-primary" {...props} role="button">
                Preview
            </span>
        </div>
    )
}

export default PreviewButton;