import React, {useState} from 'react';
import Modal from "react-modal";
import {Form, Button} from "react-bootstrap";
import  "../../styles/Popup.css"

const TipPopup = ({handleSubmit,tipText,labelText,defaultValue}) => {
    const [visible,setvisibile]=useState(false)


    return (

        <div classname="form">
            <button onClick={() => setvisibile(true)}>add a tip</button>
            <div className="container">
                <Modal classname='modal' isOpen={visible}>
                    <button className='modalButton' onClick={() => setvisibile(false)}>Close</button>
                    <Form>
                        <Form.Group className="reviewform" controlId="exampleForm.ControlTextarea1">
                            <Form.Label> {labelText}</Form.Label>
                            <Form.Control ref={tipText} as="textarea" rows={3} defaultValue={defaultValue}/>
                        </Form.Group>
                        <Button variant="outline-info" onClick={handleSubmit}>Submit</Button>
                    </Form>


                </Modal>

            </div>
        </div>
    );
};

export default TipPopup;