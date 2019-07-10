import React from "react";

function LoginButton(props) {
    return(
        <div>
            <span className="ogin-btn btn btn-primary" {...props} role="button">
                Login
            </span>
        </div>
    )
}

export default LoginButton;