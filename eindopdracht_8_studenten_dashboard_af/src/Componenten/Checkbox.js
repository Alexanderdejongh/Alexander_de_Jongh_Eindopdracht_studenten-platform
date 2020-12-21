import React from 'react'

function Checkbox(props) {
    return (
        <div>
            <input type="checkbox" onClick={props.CheckPerPersonHandler} checked={props.check}></input>
            <p>{props.name}</p>
        </div>
    )
}

export default Checkbox
