import React, {useEffect, useState} from 'react';
import Modal from "react-modal";
import {Form, Button} from "react-bootstrap";
import {useParams} from "react-router-dom";
import Course from "../../Pages/Course";

const CreatePopup = ({handleSubmit,adminKey,labelText, getCourseData,}) => {
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
            width:'400px',
            backgroundImage: 'linear-gradient(to bottom right,   #E0E9EC ,#B5BDBF )',
            color: 'black',
            height:"700px",
        },
    };


    return (
        <div classname="form">

            <button onClick={() => setvisibile(true)}>create course</button>
            <Modal  style={customStyles} isOpen={visible}>
                <button className='modalButton' onClick={() => setvisibile(false)}>Close</button>
                <Form>
                    <Form.Group className="reviewform" controlId="exampleForm.ControlTextarea1">
                        <Form.Label> <h5>{labelText}</h5></Form.Label>
                        <Form.Control ref={adminKey} as="textarea" rows={1} defaultValue="Enter API Key here"/>
                        <br></br>
                        <p>Please enter the data for the course you would like to create</p>
                        Course number:<Form.Control ref={adminKey} as="textarea" rows={1} defaultValue=""/>
                        Course title:<Form.Control ref={adminKey} as="textarea" rows={1} defaultValue=""/>
                        Semester:<Form.Control ref={adminKey} as="textarea" rows={1} defaultValue=""/>
                        Description:<Form.Control ref={adminKey} as="textarea" rows={4} defaultValue=""/>
                        Syllabus link:<Form.Control ref={adminKey} as="textarea" rows={2} defaultValue=""/>
                        Professor:<Form.Control ref={adminKey} as="textarea" rows={1} defaultValue=""/>
                        Categories:<Form.Control ref={adminKey} as="textarea" rows={2} defaultValue=""/>
                        Image file:<Form.Control ref={adminKey} as="textarea" rows={1} defaultValue=""/>

                    </Form.Group>
                    <br></br>
                    <Button variant="dark" size="sm" onClick={handleSubmit}>Submit</Button>
                </Form>


            </Modal>

        </div>
    );
};

export default CreatePopup;