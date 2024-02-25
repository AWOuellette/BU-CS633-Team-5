import React, {useEffect, useRef, useState} from 'react';
import {Link, useParams} from 'react-router-dom';
import '../styles/Course.css';
import image from '../icons/SQA.png';

import api from "../api/axiosConfig";
import ReviewPopup from '../components/popups/ReviewPopup';
import TipPopup  from "../components/popups/TipPopup";
import UpdatePopup from "../components/popups/UpdatePopup";
import DeletePopup from "../components/popups/DeletePopUp";
import axios from "axios";
import axiosConfig from "../api/axiosConfig";






const Course= ({getCourseData, course, reviews, tips, setTips, setReviews, college, setCollege, title, setTitle,department, setDepartment, courseNumber, setCourseNumber,description, setDescription, syllabus, setSyllabus, professor, setProfessor, categories, semester, setSemester, setCategories, courseimage, setImage })=> {


console.log(reviews);

const currentReviews=reviews;
const currentTips=tips;

    const deleteID= useRef();
    const adminKey = useRef();
    const revText = useRef();
    const tipText = useRef();
    const collegeTxt=useRef();
    const departmentTxt=useRef();
    const courseNumberTxt=useRef();
    const titleTxt=useRef();
    const semesterTxt=useRef();
    const descriptionTxt=useRef();
    const syllabusTxt=useRef();
    const professorTxt=useRef();
    const categoriesTxt=useRef();
    const imageTxt= useRef();

    let params = useParams();
    const id = params.id;

    const[requestError, setRequestError]=useState();


    useEffect(() => {
        getCourseData(id);
    }, [])




    const updateCourse= async (e)=>{


        e.preventDefault();


        const collegetxt = collegeTxt.current;
        const departmenttxt = departmentTxt.current;
        const courseNumbertxt = courseNumberTxt.current;
        const titletxt = titleTxt.current;
        const semestertxt = semesterTxt.current;
        const descriptiontxt = descriptionTxt.current;
        const syllabustxt = syllabusTxt.current;
        const professortxt = professorTxt.current;
        const categoriestxt = categoriesTxt.current;
        const imagetxt= imageTxt.current;
        const adminkey= adminKey.current;
        const tipss=currentTips;
        const reviewss=currentReviews;



        var categoriesArray = categoriestxt.value.split(',');
        const axiosConfig = {
            withCredentials: true,

            headers: {

                "Access-Control-Allow-Headers":"ApiKey",
                ApiKey:`${adminkey.value}`
            }
        };

        try
        {


            const response = await api.post("/api/v1/courses/secure/upsert", {tipIds: tipss, reviewIds:reviewss, categories: categoriesArray, professor: professortxt.value, syllabus: syllabustxt.value, description: descriptiontxt.value, semester: semestertxt.value, title: titletxt.value, courseNumber: courseNumbertxt.value, department:departmenttxt.value, college: collegetxt.value, id: id, image: imagetxt.value, }, axiosConfig);
            console.log("upsert" + response.data);

            const updatedCollege = collegetxt.value;
            collegetxt.value = "";
            setCollege(updatedCollege);

            const updatedDepartment = departmenttxt.value;
            departmenttxt.value = "";
            setDepartment(updatedDepartment);

            const updatedcourseNumber = courseNumbertxt.value;
            courseNumbertxt.value = "";
            setCourseNumber(updatedcourseNumber);

            const updatedTitle = titletxt.value;
            titletxt.value = "";
            setTitle(updatedTitle);

            const updatedSemester = semestertxt.value;
            semestertxt.value = "";
            setSemester(updatedSemester);

            const updatedDescription =descriptiontxt.value;
            descriptiontxt.value = "";
            setDescription(updatedDescription);

            const updatedSyllabus = syllabustxt.value;
            syllabustxt.value = "";
            setSyllabus(updatedSyllabus);

            const updatedProfessor = professortxt.value;
            professortxt.value = "";
            setProfessor(updatedProfessor);

            const updatedCategories = [...categories, {categories: categoriestxt.value}];
            categoriestxt.value = "";
            setCategories(updatedCategories);


            const updatedImage = imagetxt.value;
            imagetxt.value = "";
            setImage(updatedImage);

            console.log("update successful");

        }
        catch(err)
        {
           // setRequestError(err.message)
            console.log(err);

            if (err.response){
console.log(err);
//do something

            }else if(err.request){
                console.log(err);
//do something else

            }else if(err.message){
                console.log(err);
//do something other than the other two

            }
        }

    }

    const deleteCourse= async (e)=>{
        e.preventDefault();
        const adminkey= adminKey.current;
        const axiosConfig = {
            withCredentials: true,

            headers: {

                "Access-Control-Allow-Headers":"ApiKey",
                ApiKey:`${adminkey.value}`
            }
        };



        try
        {


            const response = await api.delete(`/api/v1/courses/secure/delete/${id}`, axiosConfig)
            console.log("delete" + response.data);

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

            </div>
                <div className="courseinfo">
                    <div className="courseimg">
                        <img src={image} width="100%" height={680} alt=""/>
                    </div>
                    <div className="update">
                        <UpdatePopup labelText="Admin use only" handleSubmit={updateCourse}
                                     adminKey={adminKey} getCourseData={getCourseData} course={course} reviews = {reviews} tips={tips}  setTips={setTips} college={college} setCollege={setCollege} department={department} setDepartment={setDepartment} courseNumber={courseNumber} setCourseNumber= {setCourseNumber} description={description} setDecription={setDescription} semester={semester} setSemester={setSemester} syllabus={syllabus} setSyllabus={setSyllabus} professor={professor} setProfessor={setProfessor} courseimage={courseimage} setImage={setImage} title={title} setTitle={setTitle} categories={categories} setCategories={setCategories}
                                     imageTxt={imageTxt} categoriesTxt={categoriesTxt} professorTxt={professorTxt} syllabusTxt={syllabusTxt} descriptionTxt={descriptionTxt} semesterTxt={semesterTxt} titleTxt={titleTxt} collegeTxt={collegeTxt} departmentTxt={departmentTxt} courseNumberTxt={courseNumberTxt}/>
                    </div>
                    <div className="delete">
                        <DeletePopup labelText="Admin use only" handleSubmit={deleteCourse}
                                     adminKey={adminKey} getCourseData={getCourseData} course={course} college={college}
                                     deleteID={deleteID} setCollege={setCollege} title={title} setTitle={setTitle}/>
                    </div>
                    <br></br>
                    <br></br>
                    <div className="courseheader">

                        <h1> {course?.title} </h1>
                        <h3>{course?.department + course?.courseNumber}</h3>
                        <h6> Professor: {course?.professor} </h6>

                    </div>


                    <div className="coursedescription">

                        <h6>Description</h6>
                        <p>{course?.description}</p>
                        <Link to={course?.syllabus} target="_blank">Syllabus</Link>
                        <br></br>
                        <br></br>
                    </div>

                    <div className="tipreviewcontainer">

                        <div className="reviews">
                            <h6> Student reviews </h6>
                            <div className="reviewcontent">
                                {

                                    reviews?.map((r, i) => {
                                        return (
                                            <>
                                                <div className="rBody" key={i}>
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
                            <div className="tipcontent">


                                {

                                    tips?.map((t, i) => {
                                        return (
                                            <>
                                                <div key={i}>
                                                    <p>"{t.body}"</p>
                                                </div>

                                            </>)

                                    })
                                }

                            </div>
                            <TipPopup handleSubmit={addTip} tipText={tipText} labelText="Write a Tip?"/>
                        </div>
                    </div>
                    <br></br>
                </div>
            </div>

        )
}

export default Course;