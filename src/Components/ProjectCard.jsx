import React, { useState } from 'react';
import { Card, Modal, Col, Row} from 'react-bootstrap';
import projectPic from '../Assets/mediaPlayer.png';
import { Link } from 'react-router-dom';
import { BASE_URL } from '../Services/baseurl';


function ProjectCard({project}) {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
  return (
    <>
      
          
            {project&&
            <Card className='shadow mb-3' onClick={handleShow} >
              <Card.Img  variant="top" src={project?`${BASE_URL}/uploads/${project.projectImage}`:projectPic} />
              <Card.Body>
                  <Card.Title className='text-center'>{project.title}</Card.Title>
              </Card.Body>
            </Card>
            }
          <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{project.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Row>
                <Col md={6}>
                    <img style={{height:"200px"}} className='img-fluid' src={project?`${BASE_URL}/uploads/${project.projectImage}`:projectPic} alt="Project image" />
                </Col>
                <Col md={6}>
                    <h2 className='text-warning'>{project.title}</h2>
                    <p>Project Overview: <span className='fw-bolder'>{project.overview}</span></p>
                    <p>Language used:<span className='fw-bolder'>{project.languages}</span></p>
                </Col>
            </Row>
            <div className='d-flex' style={{gap:"10px"}}>
                <Link to={project?.github}><i class="fa-brands fa-github fa-xl"></i></Link>
                <Link to={project?.website}><i class="fa-solid fa-globe fa-xl"></i></Link>
            </div>
        </Modal.Body>
      </Modal>

    </>
  )
}

export default ProjectCard