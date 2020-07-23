import React from 'react'

const person = (props) => {
    return (
        <div>
            <p>hi i'm {props.name} and I'm {props.age} years old!</p>
            <p>{props.children}</p>
        </div>
    )
}

export default person;