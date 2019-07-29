import React from "react";

function Button ({id, text, onClick, type, className, href, newprofolio}) {

    return (
        <a href={href}><button type={type} onClick={onClick} className={className} id={id} newProfolio={newprofolio}>
            {text}
        </button ></a>
    )
}

export default Button;