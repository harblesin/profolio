import React from "react";

function UserProject(props) {


    if (props.name) {
        const check = <input type="checkbox"></input>


    }
    return (
        <div>
            <h2 className="float-left ml-3">{props.name}</h2>
            <div>
                {props.children}
            </div>
        </div>
    )
}

export default UserProject;