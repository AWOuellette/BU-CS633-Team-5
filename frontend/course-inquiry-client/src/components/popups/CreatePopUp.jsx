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
        content: {
            top: '40%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            width:'400px',
            backgroundImage: 'linear-gradient(to bottom right,   #E0E9EC ,#B5BDBF )',
            color: 'black'
        },
    };


    return (
        <div classname="form">

            <button onClick={() => setvisibile(true)}>create course</button>
            <Modal  style={customStyles} isOpen={visible}>
                <button className='modalButton' onClick={() => setvisibile(false)}>Close</button>
                <Form>
                    <Form.Group className="reviewform" controlId="exampleForm.ControlTextarea1">
                        <Form.Label> {labelText}</Form.Label>
                        <Form.Control ref={adminKey} as="textarea" rows={1} defaultValue="Enter API Key here"/>
                        <br></br>
                        <p>Please enter the data for the course you would like to create</p>
                        <Form.Control ref={adminKey} as="textarea" rows={1} defaultValue="college:"/>
                        <Form.Control ref={adminKey} as="textarea" rows={1} defaultValue="department:"/>
                        <Form.Control ref={adminKey} as="textarea" rows={1} defaultValue="title:"/>
                        <Form.Control ref={adminKey} as="textarea" rows={1} defaultValue="semester:"/>
                        <Form.Control ref={adminKey} as="textarea" rows={1} defaultValue="description:"/>
                        <Form.Control ref={adminKey} as="textarea" rows={1} defaultValue="syllabus:"/>
                        <Form.Control ref={adminKey} as="textarea" rows={1} defaultValue="professor:"/>
                        <Form.Control ref={adminKey} as="textarea" rows={1} defaultValue="categories:"/>

                    </Form.Group>
                    <br></br>
                    <Button variant="dark" size="sm" onClick={handleSubmit}>Submit</Button>
                </Form>


            </Modal>

        </div>
    );
};

export default CreatePopup;