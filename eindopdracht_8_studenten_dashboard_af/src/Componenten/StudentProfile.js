import React from 'react'

import './StudentProfile.css'
function StudentProfile(props) {
    const studentParagraaf = `Hello, my name is ${props.name}! `


    return (
        <div className="PersonBox">
            <div className="NameTitlebox">
            <h1 className="NameTitle">{props.name}</h1>
            </div>
            <img src={props.foto} className="ProfilePic" alt="A picture of a student"/>
            <div>
                <p className="text1">{studentParagraaf}</p>
                <p className="text2">{props.story}</p>
            </div>
        </div>
    )
}

export default StudentProfile
