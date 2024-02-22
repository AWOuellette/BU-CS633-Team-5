import React, {useEffect, useRef} from 'react';
import {Link, useParams} from 'react-router-dom'
import '../styles/Course.css'
import image from '../icons/SQA.png'
import api from "../api/axiosConfig";
import ReviewPopup from '../components/popups/ReviewPopup';
import TipPopup  from "../components/popups/TipPopup";
import AdminPopup from "../components/popups/AdminPopup";

const Course= ({getCourseData, course, reviews, tips, setTips, setReviews})=> {


    const revText = useRef();
    const tipText = useRef();
    let params = useParams();
    const id = params.id;


    useEffect(() => {
        getCourseData(id);
    }, [])

    const updateCourse= async (e)=>{
        e.preventDefault();
        try
        {

            const response = await api.post("/api/v1/courses/secure/upsert");
            console.log(response.data);

            setCourses(response.data);
        }
        catch(err)
        {
            console.log(err);
        }
    }

    const addReview = async (e) => {
        e.preventDefault();

        const revtxt = revText.current;

        try {
            const response = await api.post("/api/v1/reviews", {body: revtxt.value, id: id});

            const updatedReviews = [...reviews, {body: revtxt.value}];

            revtxt.value = "";

            setReviews(updatedReviews);
        } catch (err) {
            console.error(err);
        }
    }

    const addTip = async (e) => {
        e.preventDefault();

        const tiptxt = tipText.current;

        try {
            const response = await api.post("/api/v1/tips", {body: tiptxt.value, id: id});

            const updatedTips = [...tips, {body: tiptxt.value}];

            tiptxt.value = "";

            setTips(updatedTips);
        } catch (err) {
            console.error(err);
        }



    }

        return (
            <div>
                <div className="topbuttons">
                <div className="back">
                    <Link to="/Browse">
                        <button>back</button>
                    </Link>
                </div>
                <div className="update">
                    <Link to="/Browse">
                        <button>update</button>
                    </Link>
                </div>
            </div>
                <div className="courseinfo">
                    <div className="courseimg">
                        <img  src={image} width="100%" height={675} alt=""/>
                    </div>
                    <div className="courseheader">
                        <h1> {course?.title} </h1>
                        <h3>{course?.department + course?.courseNumber}</h3>
                        <h6> Professor: {course?.professor} </h6>

                    </div>

                    <div className="coursedescription">
                        <h6>Description</h6>
                        <p>{course?.description}</p>
                        <Link to={course?.syllabus} target="_blank">Syllabus</Link>
                    </div>
                    <div className="tipreviewcontainer">
                        <div className="reviews">
                            <h6> Student reviews </h6>
                            <div>
                                {

                                    reviews?.map((r) => {
                                        return (
                                            <>
                                                <div className="rBody">
                                                    <p>"{r.body}"</p>
                                                </div>

                                            </>)

                                    })
                                }
                            </div>
                            <ReviewPopup className="popupmodal" handleSubmit={addReview} revText={revText}
                                         labelText="Write a Review??"/>
                        </div>
                        <div className="tips">
                            <h6> Tips from former students </h6>
                            <div>


                                {

                                    tips?.map((t) => {
                                        return (
                                            <>
                                                <div>
                                                    <p>"{t.body}"</p>
                                                </div>

                                            </>)

                                    })
                                }

                            </div>
                            <TipPopup handleSubmit={addTip} tipText={tipText} labelText="Write a Tip?"/>
                        </div>
                    </div>

                </div>
            </div>

        )
}

export default Course;