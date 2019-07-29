import React from "react";

function Form(props) {

   return (
       <form>
           <div className="form-group">
               <input name={props.name} onChange={props.handleInputChange} {...props} />
           </div>
       </form>
   )
}

export default Form;