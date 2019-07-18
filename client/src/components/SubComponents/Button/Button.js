import React from "react";

function Button ({text, onClick, type, className, href}) {

    return (
        <a href={href}><button type={type} onClick={onClick} className={className}>
            {text}
        </button ></a>
    )
}

export default Button;