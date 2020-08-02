import React from 'react'

const userInput = props => {
    const inputStyle = {
        border : "2px solid red",
        margin: "20px"
    }
    return (
        <input type='text' 
        style={inputStyle}
        onChange={props.onchange} 
        value={props.userName}/>
    );
}

export default userInput;
