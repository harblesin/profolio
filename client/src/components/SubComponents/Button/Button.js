import React from "react";

function Button ({text, onClick, type, className, href}) {

    return (
        <button type={type} onClick={onClick} className={className}>
            <a href={href}>{text}</a>
        </button >
    )
}

export default Button;