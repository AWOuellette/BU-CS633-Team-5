import React, {useEffect, useState} from 'react';
import Modal from "react-modal";
import {Form, Button} from "react-bootstrap";
import {useParams} from "react-router-dom";
import Course from "../../Pages/Course";

const DeletePopup = ({handleSubmit,adminKey,setAdminKey,labelText,deleteID, defaultValue, getCourseData, course, college,setCollege, title, setTitle}) => {
    const [visible,setvisibile]=useState(false)
    let params = useParams();


console.log(course.id);



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

            <button onClick={() => setvisibile(true)}>delete course</button>
            <Modal  style={customStyles} isOpen={visible}>
                <button className='modalButton' onClick={() => setvisibile(false)}>Close</button>
                <Form>
                    <Form.Group className="reviewform" controlId="exampleForm.ControlTextarea1">
                        <Form.Label> {labelText}</Form.Label>
                        <Form.Control ref={adminKey} as="textarea" rows={1} defaultValue="Enter API Key here"/>
                        <br></br>
                        <p>Please confirm the course ID you would like to delete</p>
                        <Form.Control ref={deleteID} as="textarea" rows={1} defaultValue={course.id}/>

                    </Form.Group>
                    <br></br>
                    <Button variant="dark" size="sm" onClick={handleSubmit}>Submit</Button>
                </Form>


            </Modal>

        </div>
    );
};

export default DeletePopup;