import React, { useState } from 'react';
import { Card, Modal, Col, Row, Button } from 'react-bootstrap';
import projectPic from '../Assets/mediaPlayer.png';
import { Link } from 'react-router-dom';


function ProjectCard() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
  return (
    <>
      
          <Card className='shadow mb-3 ' onClick={handleShow}>
            <Card.Img  variant="top" src={projectPic} />
            <Card.Body>
                <Card.Title className='text-center'>Card Title</Card.Title>
            </Card.Body>
          </Card>

          <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Row>
                <Col md={6}>
                    <img className='w-100' src={projectPic} alt="" />
                </Col>
                <Col md={6}>
                    <h2>Project Title</h2>
                    <p>Project Overview: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis nulla provident voluptates nihil fugit ipsa delectus. Earum repudiandae repellat perferendis soluta repellendus perspiciatis labore itaque, dolor, blanditiis officiis natus porro?</p>
                    <p>Language used:<span className='fw-bolder'>HTML,CSS,React</span></p>
                </Col>
            </Row>
            <div className='d-flex' style={{gap:"10px"}}>
                <Link to={'https://github.com/nhusn/Veedio'}><i class="fa-brands fa-github fa-xl"></i></Link>
                <Link to={'https://cerulean-belekoy-bc4473.netlify.app/'}><i class="fa-solid fa-globe fa-xl"></i></Link>
            </div>
        </Modal.Body>
      </Modal>
      
    </>
  )
}

export default ProjectCard