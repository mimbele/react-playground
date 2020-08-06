import React from "react"

const validation = (props) => {
    let msg = "text is too short"
    if (props.textLength > 5){
        msg = "text is too long"
    }
    return (<p>{msg}</p>);    
    
}

export default validation;