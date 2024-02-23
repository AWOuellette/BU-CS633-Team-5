import React from 'react';
import { Link } from 'react-router-dom';
import background from '../icons/option2.png'
import '../styles/Home.css'


const Home = () =>{
    return(
    <div className="home" style={{ backgroundImage: `url(${background}`}}>
    <div className="header" >

        <h1> Boston University Course Inquiry System</h1>
        <p> Your guide to succeeding as a BU student </p>
        <Link to="/Browse">
        <button> BROWSE COURSES </button>
    </Link>
    </div>
    </div>
    )
}

export default Home