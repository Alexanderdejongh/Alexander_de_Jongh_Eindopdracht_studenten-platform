import React, {useContext} from 'react'

import NavBar from './Navbar';
import Home from './Home';
import About from './About';
import Student from './Student';
import Gemiddeld from './Gemiddeld';
import Footer from './Footer';

import {dataContext} from '../Data/Data';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './Container.css';



function Container() {

    const [studentData, setStudentData] =useContext(dataContext)

    return (
        <Router>
        <div>
            <NavBar />
        </div>
        <div className="main_Container">
            <Switch>
                {studentData.map(item =>{
                    const studentPath = `/${item.name}`
                    return(<Route key={item.id} path={studentPath} component={() => <Student 
                        key={item.id} 
                        name={item.name} 
                        picture={item.picture} 
                        story={item.story}/>}></Route>)})
                }
                <Route path="/about" component={About}/>
                <Route path="/gemiddeld" component={Gemiddeld}/>
                <Route path="/" component={Home}/>
            </Switch>
        </div>
        <div>
            <Footer />
        </div>
        </Router>
    )
}

export default Container
