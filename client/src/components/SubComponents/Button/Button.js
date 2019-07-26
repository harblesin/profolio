import React from "react";

function Button ({text, onClick, type, className, href, newProfolio}) {

    return (
        <a href={href}><button type={type} onClick={onClick} className={className} newProfolio={newProfolio}>
            {text}
        </button ></a>
    )
}

export default Button;