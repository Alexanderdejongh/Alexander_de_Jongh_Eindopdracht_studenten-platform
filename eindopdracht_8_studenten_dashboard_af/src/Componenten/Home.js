import React from 'react'
import Autoplay from './Autoplay';
import './Home.css';


function Home() {
    


    return (
        <div className="homeContainer">
            <h1 className="homeTitle">Welkom op onze Studenten Dashboard</h1>
            <div className="StudentFoto"></div>
            <div className="textContainer">
                <p className="textHome">On this website you can see per student what the assessments of the students are!<br/> <br/>
                You can see it per student, per assignment and the average of all students!</p>
            </div>
            <h1 className="slideContainerTitle"> The students of this year!</h1>
            <div className="slideContainer"> 
            
                <Autoplay />
            </div>
        </div>
    )
}

export default Home
