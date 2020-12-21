import './Navbar.css';
import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import {dataContext} from '../Data/Data';
import StudentLi from './Student_li';
import WincLogo from './Logo_Winc.svg';

function Navbar() {

    const [studentData, setStudentData] =useContext(dataContext)
    return (
        <div className="navContainer">
            <div className="logo-Container">
                <div className="WincLogo">
                    <img src={WincLogo} alt="Winc Logo" />
                </div>
                <div className="TilteBox"> 
                    <h1 className="TilteNav">Welcome to the Students Platform</h1>
                </div>
            </div>
            <ul className="navmenu">
                <Link to="/">
                    <li className="navMenuItem">Home</li>
                </Link>
                <Link to="/about">
                    <li className="navMenuItem">About</li>
                </Link>
                <Link to="/gemiddeld">
                    <li className="navMenuItem">Average rating</li>
                </Link>
                <li className="navMenuItem students">Students
                    <ul className="DropDownMenu">
                        {studentData.map(item =>{
                            return( <StudentLi key={item.id} name={item.name}/>)
                        })}
                    </ul>
                </li>
                
            </ul>

        </div>
    )
}

export default Navbar
