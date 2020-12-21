import React from 'react'
import {Link} from 'react-router-dom'

function Student_li(props) {
    const link = `/${props.name}`
    return (
        <Link to={link} >
            <li className="navMenuItem navDropdownMenuItem">{props.name}</li>
        </Link>
    )
}

export default Student_li
