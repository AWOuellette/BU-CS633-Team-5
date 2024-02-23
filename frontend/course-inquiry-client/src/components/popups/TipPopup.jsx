import React, {useState} from 'react';
import Modal from "react-modal";
import {Form, Button} from "react-bootstrap";
import  "../../styles/Popup.css"

const TipPopup = ({handleSubmit,tipText,labelText,defaultValue}) => {
    const [visible,setvisibile]=useState(false)

    const customStyles = {
        content: {
            top: '40%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            width:'600px',
            backgroundImage: 'linear-gradient(to bottom right,   #b2d8d8,#66b2b2)',
            color: 'black'
        },
    };

    return (

        <div classname="form">
            <button onClick={() => setvisibile(true)}>add a tip</button>
            <div className="container">
                <Modal classname ='modal' style={customStyles} isOpen={visible}>
                    <button className='modalButton' onClick={() => setvisibile(false)}>Close</button>
                    <Form>
                        <Form.Group className="reviewform" controlId="exampleForm.ControlTextarea1">
                            <Form.Label> {labelText}</Form.Label>
                            <Form.Control ref={tipText} as="textarea" rows={3} defaultValue={defaultValue}/>
                        </Form.Group>
                        <br></br>
                        <Button variant="dark" size="sm" onClick={handleSubmit}>Submit</Button>
                    </Form>


                </Modal>

            </div>
        </div>
    );
};

export default TipPopup;