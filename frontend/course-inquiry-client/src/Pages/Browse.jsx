import React from 'react'
import Coursecard from "../components/course/Coursecard";
import TextField from "@mui/material/TextField";
import '../styles/Browse.css'

const Browse= ({courses}) =>{
    return(

        <div className="browseCourses">

            <h1 className="coursesTitle">Courses</h1>
            <div className="search">
                <TextField
                    id="outlined-basic"
                    variant="outlined"
                    fullWidth
                    label="Search Courses"
                />
            </div>
            <p> *filter section*</p>
            <div className="courseList">

                <Coursecard courses={courses}>
                </Coursecard>
            </div>
        </div>


    )
}

export default Browse