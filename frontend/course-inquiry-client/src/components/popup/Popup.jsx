import React, {useState} from 'react';
import Modal from "react-modal";
import {Form, Button} from "react-bootstrap";
import  "../../styles/Popup.css"

const Popup = ({handleSubmit,buttonText,labelText,defaultValue}) => {
    const [visible,setvisibile]=useState(false)


    return (
        <div classname="form">
            <button onClick={() => setvisibile(true)}>add a review</button>
            <Modal classname ='modal' isOpen={visible}>
                <button onClick={() => setvisibile(false)}>X</button>
                <Form>
                    <Form.Group className="reviewform" controlId="exampleForm.ControlTextarea1">
                        <Form.Label> {labelText}</Form.Label>
                        <Form.Control ref={buttonText} as="textarea" rows={3} defaultValue={defaultValue}/>
                    </Form.Group>
                    <Button variant="outline-info" onClick={handleSubmit}>Submit</Button>
                </Form>


            </Modal>

        </div>
    );
};

export default Popup;