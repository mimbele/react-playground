import React from 'react'
import './Char.css'

const char = (props) => {
    return (
        <div class="Char" onClick={props.onClick}>
            {props.character}
        </div>
    )
}

export default char;