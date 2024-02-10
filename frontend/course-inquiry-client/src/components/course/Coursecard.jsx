import React from 'react';
import '../../styles/Coursecard.css'
import {Link} from "react-router-dom";

const Coursecard = ({courses}) => {
    return (
        <div className="courses">
            {
                courses?.map((course, key) =>{
                    return(

                        <div className="courseName">
                            key={key}
                            <h4>{course.college + " " + course.department + course.courseNumber}</h4>
                            <h6>{course.title}</h6>
                            <Link to="/Course">
                                <button> view </button>
                            </Link>
                        </div>

                    )
                })
            }
        </div>
    )
}
export default Coursecard;