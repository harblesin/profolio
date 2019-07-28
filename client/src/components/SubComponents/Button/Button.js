import React from "react";

function Button ({id, text, onClick, type, className, href, newProfolio}) {

    return (
        <a href={href}><button type={type} onClick={onClick} className={className} id={id} newProfolio={newProfolio}>
            {text}
        </button ></a>
    )
}

export default Button;