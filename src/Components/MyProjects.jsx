import React, { useContext, useEffect, useState } from 'react'
import AddProject from './AddProject'
import { deleteProjectAPI, userProjectAPI } from '../Services/allAPI'
import { addProjectResponseContext, editProjectResponseContext } from '../Context/ContextShare'
import EditProject from './EditProject'
import { toast } from 'react-toastify'


function MyProjects() {
  const {addProjectResponse,setAddProjectResponse} = useContext(addProjectResponseContext)
  const {editProjectResponse,setEditProjectResponse} = useContext(editProjectResponseContext)
  const [userProject,setUserProject] = useState([])
  const getUserProjects = async ()=>{
    if(sessionStorage.getItem("token")){
      const token = sessionStorage.getItem("token")
      const reqHeader = {
        "Content-Type" : "application/json", "Authorization":`Bearer ${token}`
      }
      const result = await userProjectAPI(reqHeader)
      if(result.status===200){
        setUserProject(result.data)
      }else{
        console.log(result);
        // toast.warning(result.response.data)
      }
    }
  }

  useEffect(()=>{
    getUserProjects()
  },[addProjectResponse,editProjectResponse])

  const handleDelete = async (id)=>{
    const token = sessionStorage.getItem("token")
    const reqHeader = {
      "Content-Type" : "application/json", "Authorization":`Bearer ${token}`
    }
    const result = await deleteProjectAPI(id,reqHeader)
    if(result.status===200){
      getUserProjects()
    }else{
      toast.error(result.response.data)
    }
  }

  return (
    <div className='border shadow rounded ms-5 me-3 mb-4'>
        <div className='d-flex'>
            <h3 className='ms-4 mt-3'>My Projects</h3>
            <button className='btn ms-auto me-2 mt-3' ><AddProject /></button>
        </div>


        {userProject?.length>0?userProject.map(project=>(
          <div className='border d-flex align-items-center rounded p-2 m-3'>
          <h5>{project.title}</h5>
          <div className='d-flex icon ms-auto'>
              <EditProject project={project} />
              <a href={`${project.github}`} target="_blank" className='btn'><i className="fa-brands fa-github fa-2x"></i></a>
              <button onClick={()=>handleDelete(project._id)} className='btn'><i className="fa-solid fa-trash fa-2x"></i></button>
          </div>
      </div>
        )):<p className='text-danger text-bold ms-4'>No Projects Uploaded yet!!!</p>
        }
    </div>
  )
}

export default MyProjects