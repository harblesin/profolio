import React from "react";

function UserProject (props) {


    if(props.name){
        const check = <input type="checkbox"></input>
        
        
    }
    return(
    <div className Row>
        <h2 className="col-10">{props.name}</h2>
        <div className="col-1">
            {props.children}
        </div>
        
    </div>
        
        
       
    )
    
}

export default UserProject;