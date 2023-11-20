import React from 'react'
import { Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function Header({insideDashboard}) {
  return (
      <Navbar className='bg-secondary w-100' style={{height:'70px'}}>
          <div className='ms-5 p-4 mb-2 w-100'>
              <Link to={'/'} className='fs-4' style={{ textDecoration: "none", color: "black" }}>
              <i class="fa-solid fa-diagram-project fa-beat-fade me-2"></i>
                  Project Fair
              </Link>
          </div>
          { insideDashboard && <div className='ms-auto me-5'>
          <button className='btn text-danger'><h5>Logout</h5></button>
          </div>}
      </Navbar>
    
  )
}

export default Header