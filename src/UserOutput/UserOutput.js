import React from 'react'
import './UserOutput.css'

const userOutput = props => {
    return (
        <div className="UserOutput">
            <p>lorem ipsum</p>
            <p>user name is {props.userName} </p>
        </div>
    );
}

export default userOutput;