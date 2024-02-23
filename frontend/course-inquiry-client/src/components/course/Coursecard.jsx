import React from 'react';
import '../../styles/Coursecard.css'
import {Link} from "react-router-dom";
import {Select} from "@mui/material";
import course from "../../Pages/Course";

const Coursecard = ({courses,search,category, setCategory}) => {

    console.log(category);
    return (
        <div className="courses">
            {

                courses?.filter((course)=>{
                    if(search===""){
                        return course
                    }else if(course.title.toLowerCase().includes(search)){
                        return course
                    }else if(course.courseNumber.includes(search)){
                        return course
                    }else if((course.college+" "+course.department+course.courseNumber).toLowerCase().includes(search)){
                        return course
                    }else if((course.department+course.courseNumber).toLowerCase().includes(search)){
                        return course
                    }
                })
                    .filter((course)=>{
                        if(category===""){
                            return course
                        }else if(course.categories.includes(category)){
                        return course}
                        else if(category.length===0){
                            return course

                        }
                })


                    .map((course, i) =>{
                    return(

                        <div className="courseName" key={i}>


                            <h4>{course.college + " " + course.department + course.courseNumber}</h4>
                            <h6>{course.title}</h6>

                            <div className="ptag">

                            <div>{course.categories?.map((category, i) => {
                                return (
                                    <span>
                                        <p className={'badge text-bg-info bg-opacity-25'}> {course.categories[i]}</p>
                                    </span>
                            )
                            })} </div>
                            </div>
                            <Link to={`/Course/${course.id}`}>
                                <button className="coursebtn"> view</button>
                            </Link>
                        </div>

                    )
                })
            }
        </div>
    )
}


export default Coursecard;