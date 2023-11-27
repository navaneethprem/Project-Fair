import React, { useContext } from 'react'
import { Navbar } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { tokenAuthorisationContext } from '../Context/TokenAuth'


function Header({insideDashboard}) {
    const {isAuthorized,setIsAuthorized} = useContext(tokenAuthorisationContext)
    const navigate = useNavigate()
    const handleLogout = ()=>{
        // remove all existing user details from browser
        sessionStorage.removeItem("existingUser")
        sessionStorage.removeItem("token")
        setIsAuthorized(false)
        // navigate to landing page
        navigate('/')
    }
  return (
      <Navbar className='bg-secondary w-100' style={{height:'70px'}}>
          <div className='ms-5 p-4 mb-2 w-100'>
              <Link to={'/'} className='fs-4' style={{ textDecoration: "none", color: "black" }}>
              <i class="fa-solid fa-diagram-project fa-beat-fade me-2"></i>
                  Project Fair
              </Link>
          </div>
          { insideDashboard && <div className='ms-auto me-5'>
          <button onClick={handleLogout} className='d-flex btn'><h5 className='text-danger'>Logout</h5><i className="fa-solid fa-right-from-bracket fa-beat-fade ms-1 mt-1"></i></button>
          </div>}
      </Navbar>
    
  )
}

export default Header