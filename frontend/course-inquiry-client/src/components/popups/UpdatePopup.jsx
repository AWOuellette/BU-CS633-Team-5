import React, {useEffect, useState} from 'react';
import Modal from "react-modal";
import {Form, Button} from "react-bootstrap";
import {useParams} from "react-router-dom";
import Course from "../../Pages/Course";

const UpdatePopup = ({handleSubmit,professorTxt,categoriesTxt,imageTxt, descriptionTxt,syllabusTxt,adminKey,setAdminKey, semesterTxt, labelText,collegeTxt,departmentTxt,courseNumberTxt,titleTxt, defaultValue,getCourseData, course, reviews, tips, setTips, setReviews, college, setCollege, title, setTitle,department, setDepartment, courseNumber, setCourseNumber,description, setDescription, syllabus, setSyllabus, professor, setProfessor, categories, semester, setSemester, setCategories, courseimage, setImage}) => {
    const [visible,setvisibile]=useState(false)
    let params = useParams();






    useEffect(() => {
        getCourseData;
    }, [])
    const customStyles = {
        overlay: {
            background: "rgba(0, 0, 0, 0.5)",
            overflowY:"scroll"
        },
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            width:'500px',
            backgroundImage: 'linear-gradient(to bottom right,   #E0E9EC ,#B5BDBF )',
            color: 'black',
            height:"700px",

        },
    };


    return (
        <div classname="form">

            <button onClick={() => setvisibile(true)}>update</button>
            <Modal  style={customStyles} isOpen={visible}>
                <button className='modalButton' onClick={() => setvisibile(false)}>Close</button>
                <Form>
                    <Form.Group className="reviewform" controlId="exampleForm.ControlTextarea1">
                        <Form.Label> <h5>{labelText}</h5></Form.Label>
                        <Form.Control ref={adminKey} as="textarea" rows={1} defaultValue="Enter API Key here"/>
                        <br></br>
                        <p>Please enter the data you would like to edit</p>
                        College:<Form.Control ref={collegeTxt} as="textarea" rows={1} defaultValue={college}/>
                        Department:<Form.Control ref={departmentTxt} as="textarea" rows={1} defaultValue={department}/>
                        Course number:<Form.Control ref={courseNumberTxt} as="textarea" rows={1} defaultValue={courseNumber}/>
                        Course title:<Form.Control ref={titleTxt} as="textarea" rows={1} defaultValue={title}/>
                        Semester:<Form.Control ref={semesterTxt} as="textarea" rows={1} defaultValue={semester}/>
                        Description:<Form.Control ref={descriptionTxt} as="textarea" rows={4} defaultValue={description}/>
                        Syllabus:<Form.Control ref={syllabusTxt} as="textarea" rows={2} defaultValue={syllabus}/>
                        Professor:<Form.Control ref={professorTxt} as="textarea" rows={1} defaultValue={professor}/>
                        Categories:<Form.Control ref={categoriesTxt} as="textarea" rows={2} defaultValue={categories}/>
                        Image:<Form.Control ref={imageTxt} as="textarea" rows={1} defaultValue={courseimage}/>

                    </Form.Group>
                    <br></br>
                    <Button variant="dark" size="sm" onClick={handleSubmit}>Submit</Button>
                </Form>


            </Modal>

        </div>
    );
};

export default UpdatePopup;