import React from 'react'
import Header from '../Components/Header'
import ProjectCard from '../Components/ProjectCard'
import { Col, Row } from 'react-bootstrap'

function Projects() {
  return (
    <div className='w-100'>
      <Header/>
      <h1 className='text-center'>All Projects</h1>
      <div className='d-flex justify-content-center align-items-center mt-5'>
        <input type="text" className='form-control w-50' placeholder='Search Projects by Technologies'  />
        <i style={{marginLeft:"-40px"}} className='fa-solid fa-magnifying-glass fa-rotate-90'></i>
      </div>

      <Row className='mt-5 container mb-4'>
        <Col lg={4} md={6} sm={12}>
          <ProjectCard/>
        </Col>
      </Row>
    </div>
  )
}

export default Projects