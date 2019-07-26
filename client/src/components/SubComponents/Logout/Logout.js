import React from "react";

function Logout (props) {
    return(
        <div>
            <nav className="navbar">
                <a href="/" onClick={props.logout}>
                <button>Log Out</button>
            </a>
            </nav>
            
        </div>
    )
}

export default Logout;