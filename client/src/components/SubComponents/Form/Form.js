import React from "react";

function Form ({label, id, placeholder}) {

    return (
        <form>
            <div className="form-group">
                <label> {label} </label>
                <input type="text"
                className="form-control"
                id={id}
                placeholder={placeholder}/>
            </div>
        </form>
    )
}

export default Form;