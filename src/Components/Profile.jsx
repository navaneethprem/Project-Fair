import React, { useState } from 'react'
import { Collapse } from 'react-bootstrap'


function Profile() {
    const [open, setOpen] = useState(false);
  return (
    <div className='card shadow p-5'>
        <div className='d-flex justify-content-between'>
            <h2>profile</h2>
            <button onClick={() => setOpen(!open)} className='btn btn-outline-info'><i class="fa-solid fa-angle-down"></i>
            </button>
        </div>
       <Collapse in={open}>
            <div className="row justify-content-center mt-3">
                {/* upload pic */}
                <label className='text-center'>
                    <input style={{display:'none'}} type="file" />
                    <img width={'200px'} height={'200px'} className='rounded circle' src="https://www.svgrepo.com/show/384674/account-avatar-profile-user-11.svg" alt="upload picture" />
                </label>
                <div className='mt-3'>
                    <input type="text" className='form-control' placeholder='Github' />
                </div>
                <div className='mt-3'>
                    <input type="text" className='form-control' placeholder='LinkedIn' />
                </div>
                <div className="mt-3 text-center d-grid">
                    <button className='btn btn-warning'>Update</button>
                </div>
            </div>
       </Collapse>
    </div>
  )
}

export default Profile