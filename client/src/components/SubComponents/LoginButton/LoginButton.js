import React from "react";

function LoginButton(props) {
    return(
        <div>
            <span className="login-btn btn btn-primary" {...props} role="button">
                Login
            </span>
        </div>
    )
}

export default LoginButton;