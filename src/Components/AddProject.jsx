import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';


function AddProject() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Button variant="success" onClick={handleShow}>
                Add Project
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                size='lg'
                centered>
                
                <Modal.Header closeButton>
                    <Modal.Title>Project Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="row">
                        <div className="col-lg-6">
                            <label>
                                <input type="file" style={{display:'none'}} />
                                <img className='img-fluid' src="https://www.pulsecarshalton.co.uk/wp-content/uploads/2016/08/jk-placeholder-image.jpg" alt="project-picture" />
                                </label>
                        </div>
                        <div className="col-lg-6">
                            <div className='mb-3'><input type="text" className='form-control' placeholder='project title' /></div>
                            <div className='mb-3'><input type="text" className='form-control' placeholder='Language used' /></div>
                            <div className='mb-3'><input type="text" className='form-control' placeholder='Github Link' /></div>
                            <div className='mb-3'><input type="text" className='form-control' placeholder='project Overview' /></div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        cancel
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Add
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default AddProject