import React, {useEffect, useRef} from 'react';
import {Link, useParams} from 'react-router-dom'
import '../styles/Course.css'
import image from '../icons/courseimg.jpg'
import api from "../api/axiosConfig";
import Popup from '../components/popup/Popup';

const Course= ({getCourseData, course, reviews, tips, setTips, setReviews})=> {


    const buttonText = useRef();
    let params = useParams();
    const id = params.id;


    useEffect(() => {
        getCourseData(id);
    }, [])


    const addReview = async (e) => {
        e.preventDefault();

        const txt = buttonText.current;

        try {
            const response = await api.post("/api/v1/reviews", {body: buttonText.value, id: id});

            const updatedReviews = [...reviews, {body: buttonText.value}];

            buttonText.value = "";

            setReviews(updatedReviews);
        } catch (err) {
            console.error(err);
        }



    }

    const addTip = async (e) => {
        e.preventDefault();

        const tip = buttonText.current;

        try {
            const response = await api.post("/api/v1/tips", {body: buttonText.value, id: id});

            const updatedTips = [...tips, {body: buttonText.value}];

            tip.value = "";

            setTips(updatedTips);
        } catch (err) {
            console.error(err);
        }



    }

        return (
            <div>
                <div className="back">
                    <Link to="/Browse">
                        <button>back</button>
                    </Link>
                </div>
                <div className="courseinfo">
                    <div className="courseheader">
                        <h1> {course?.title} </h1>
                        <h3>{course?.department + course?.courseNumber}</h3>
                        <h6> {course?.professor} </h6>

                    </div>
                    <div className="courseimg">
                        <img src={image} width={700} height={500} alt=""/>

                    </div>
                    <div className="coursedescription">
                        <p>{course?.description}</p>
                    </div>
                    <div className="syllabus">
                        <Link to="https://www.google.com">Syllabus</Link>
                    </div>
                    <div className="reviews">
                        <h6> Student reviews </h6>
                        <div>


                                    {

                                    reviews?.map((r) => {
                                    return(
                                    <>
                                    <div>
                                        <p>{r.body}</p>
                            </div>

                        </>)

                        })
                                    }
                                    </div>
                                    <Popup handleSubmit={addReview} buttonText={buttonText} labelText="Write a Review??"/>
                    </div>
                    <div className="tips">
                        <h6> Tips from former students </h6>
                        <div>


                            {

                                tips?.map((t) => {
                                    return (
                                        <>
                                            <div>
                                                <p>{t.body}</p>
                                            </div>

                                        </>)

                                })
                            }

                    </div>
                        <Popup handleSubmit={addTip} buttonText={buttonText} labelText="Write a Tip?"/>
                    </div>
                    <button>add a tip</button>

            </div>
</div>

)
}

export default Course;