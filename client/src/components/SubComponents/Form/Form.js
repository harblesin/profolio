import React from "react";

function Form(props) {

   return (
       <form>
           <div className="form-group">
               <input type="text" {...props} />
           </div>
       </form>
   )
}

export default Form;