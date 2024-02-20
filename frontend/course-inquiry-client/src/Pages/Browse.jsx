
import React from 'react'
import Coursecard from "../components/course/Coursecard";
import TextField from "@mui/material/TextField";
import Sidebar from "../components/sidebar/Sidebar";
import '../styles/Browse.css'
import headerimg from "../icons/courseheader.png";

 const Browse= ({courses}) => {
     return (
         <div className="browsepage">
             <div className="top">
             <div className='banner'>
                 <img src={headerimg} alt=""/>

                 <div className="bannerText"><h1>Browse
                     Courses</h1></div>
             </div>
             <div className="headerimg">


             </div>
         </div>
             <div className="bottom">
.             <div className="sidebar">
                 <Sidebar></Sidebar>
             </div>
             <div className="courseList">


                 <Coursecard courses={courses}>
                 </Coursecard>
             </div>
             </div>
         </div>


     )
 }

export default Browse
