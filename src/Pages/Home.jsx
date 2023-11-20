import React, { useEffect, useState } from 'react'
import { Col, Row } from 'reactstrap'
import titleImg from '../Assets/title.png'
import ProjectCard from '../Components/ProjectCard'
import { Link } from 'react-router-dom'

function Home() {
  const [loggedin,setLoggedin] = useState(false)
  useEffect(()=>{
    if(sessionStorage.getItem("token")){
      setLoggedin(true)
    }else{
      setLoggedin(false)
    }
  },[])
  return (
    <>
      <div style={{width:"100%",height:"100vh"}} className='bg-primary container-fluid rounded'>
        <Row className='align-items-center p-5'>
          <Col sm={12} md={6}>
            <h1 style={{fontSize:"80px"}} className='fw-bolder text-light'><i class="fa-solid fa-diagram-project fa-beat-fade"></i> Project Fair</h1>
            <p className='text-bold'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur blanditiis minus unde officia. Distinctio rerum non ab. Possimus, molestiae! Voluptatum est expedita tenetur accusantium quia explicabo, soluta laboriosam deserunt cupiditate.
            Voluptatem rem debitis dolor, non enim magnam, laudantium est placeat numquam dolore magni iste laborum. Temporibus quia incidunt omnis nihil deserunt voluptate ratione sunt, autem necessitatibus neque nam fugit placeat!</p>
            {loggedin?
              <Link to={'/dashboard'} className='btn btn-warning'>Manage your projects<i className='fa-solid fa-arrow-right fa-beat-fade'></i></Link>:
            <Link to={'/login'} className='btn btn-warning'>Start to explore <i className='fa-solid fa-arrow-right fa-beat-fade'></i></Link>
            }
          </Col>

          <Col sm={12} md={6} className='text-center'>
            <img className='w-75' src={titleImg} alt="" />
          </Col>
        </Row>
      </div>

      <div className='all-projects mt-5'>
        <h1 className='text-center mb-5'>Explore Our Projects</h1>
        <marquee scrollAmount={25}>
          <Row>
            <Col sm={12} md={6} lg={4}>
              <ProjectCard/>
            </Col>
          </Row>
        </marquee>
        <div className='text-center mt-5 mb-3'><Link to={'/projects'}>view more projects</Link></div>
      </div>
    </>
  )
}

export default Home