import React from 'react';
import '../../styles/Coursecard.css'

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
                            <button>view</button>
                        </div>

                    )
                })
            }
        </div>
    )
}
export default Coursecard;