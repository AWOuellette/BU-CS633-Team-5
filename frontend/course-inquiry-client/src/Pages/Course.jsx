import React from 'react';
import { Link } from 'react-router-dom'

const Course = () => {
    return (
        <div>

            <Link to="/Browse">
            <button>back</button>
            </Link>
                <h1> Course Name </h1>
                <h3>Department + Course Number</h3>
                <p> *image* </p>
                <p>Description</p>
                <Link to="https://www.google.com">Syllabus</Link>
                <h6> Student reviews </h6>
                <p> review </p>
                <button>add a review</button>
                <h6> Tips for success </h6>
                <button>add a tip</button>
        </div>
);
};

export default Course;