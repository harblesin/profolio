import React from "react";

function UserProject (props) {


    if(props.name){
        const check = <input type="checkbox"></input>
        console.log(check)
        
    }
    return(
    
        <h1>{props.name}</h1>
       
    )
    
}

export default UserProject;