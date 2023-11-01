import React from 'react'
import AddProject from './AddProject'

function MyProjects() {
  return (
    <div className='border shadow rounded ms-5 me-3 mb-4'>
        <div className='d-flex'>
            <h3 className='ms-4 mt-3'>My Projects</h3>
            <button className='btn ms-auto me-2 mt-3' ><AddProject /></button>
        </div>
        <div className='border d-flex align-items-center rounded p-2 m-3'>
            <h5>Project Title</h5>
            <div className='icon ms-auto'>
                <button className='btn'><i class="fa-solid fa-pen-to-square fa-2x"></i></button>
                <button className='btn'><i class="fa-brands fa-github fa-2x"></i></button>
                <button className='btn'><i class="fa-brands fa-trash fa-2x"></i></button>
            </div>
        </div>
        <p className='text-danger text-bold ms-4'>No Projects Uploaded</p>
    </div>
  )
}

export default MyProjects