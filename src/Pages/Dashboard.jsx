import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import MyProjects from '../Components/MyProjects'
import Profile from '../Components/Profile'


function Dashboard() {
  const [username,setUsername] = useState("")
  useEffect(()=>{
    if(sessionStorage.getItem("existingUser")){
      setUsername(JSON.parse(sessionStorage.getItem("existingUser")).username)
    }
  },[])
  return (
    <div>
      <Header insideDashboard/>
      <div style={{marginTop:'80px'}} className='row d-flex w-100'>
        <h2 className='ps-5 mb-3'>Welcome <span className='text-warning'>{username}</span></h2>
        <div className='col-lg-8'><MyProjects /></div>
        <div className='col-lg-4'><Profile /></div>
      </div>
      
    </div>
  )
}

export default Dashboard