import React from 'react';

const Coursecard = ({courses}) => {
    return (
        <div>
            {
                courses?.map((course) =>{
                    return(
                        <div className="courseName">
                            <h4>{course.college + " " + course.department + course.courseNumber}</h4>
                        </div>

                )
            })
            }
        </div>
    )
}
export default Coursecard;