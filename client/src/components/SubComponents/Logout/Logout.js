import React from "react";

function Logout (props) {
    return(
        <div className="float-right">
            <nav className="navbar">
                <a href="/" onClick={props.logout}>
                <button className="float-right medium buttonColor4 font-weight-bold btn active ml-1 mr-2 mb-1">Log Out</button>
            </a>
            </nav>
            
        </div>
    )
}

export default Logout;