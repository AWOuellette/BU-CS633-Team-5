import React from 'react'
import Coursecard from "../components/course/Coursecard";
const Browse= ({courses}) =>{
    return(

    <div className="courses">
        <h1 className="coursesTitle">Available Courses</h1>
        <div className="courseList">

        <Coursecard courses={courses} >
        </Coursecard>
        </div>
    </div>


    )
}

export default Browse