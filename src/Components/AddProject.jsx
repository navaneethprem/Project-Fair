import React, { useContext, useEffect, useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import { addProjectAPI } from '../Services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addProjectResponseContext } from '../Context/ContextShare';


function AddProject() {
    const {addProjectResponse,setAddProjectResponse} = useContext(addProjectResponseContext)

    const [show, setShow] = useState(false);
    const [projectDetails,setProjectDetails] = useState({
        title:"",languages:"",overview:"",github:"",website:"",projectImage:""
    })

    const [token,setToken] = useState("")

    console.log(projectDetails);
    const [preview,setPreview] = useState("")

    const handleClose = () => {
        setShow(false);
        setProjectDetails({
            title:"",languages:"",overview:"",github:"",website:"",projectImage:""
        })
        setPreview("")
    }
    const handleShow = () => setShow(true);

    useEffect(()=>{
        if(projectDetails.projectImage){
            setPreview(URL.createObjectURL(projectDetails.projectImage))
        }
    },[projectDetails.projectImage])

    useEffect(()=>{
        if(sessionStorage.getItem("token")){
            setToken(sessionStorage.getItem("token"))
        }else{
            setToken("")
        }
    },[])

    
    const handleAdd = async (e)=>{
        e.preventDefault()
        const {title,languages,overview,projectImage,github,website} = projectDetails
        if(!title || !languages || !overview || !projectImage || !github || !website){
            toast.info("plase fill the form completely!!!")
        }else{
            const reqBody = new FormData()
                reqBody.append("title",title)
                reqBody.append("languages",languages)
                reqBody.append("overview",overview)
                reqBody.append("projectImage",projectImage)
                reqBody.append("github",github)
                reqBody.append("website",website)

               if(token){
                   const reqHeader = {
                        "Content-Type":"multipart/form-data",
                        "Authorization":`Bearer ${token}`
                    }
                    const result = await addProjectAPI(reqBody,reqHeader)
                if(result.status===200){
                    console.log(result.data);
                    handleClose()
                    setAddProjectResponse(result.data)
                }else{
                    console.log(result);
                    toast.warning(result.response.data);
                }
                }
               
        }
    }



    return (
        <>
            <Button variant="success" onClick={handleShow}>
                Add Project
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                size='lg'
                centered>
                
                <Modal.Header closeButton>
                    <Modal.Title>Project Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="row">
                        <div className="col-lg-6">
                            <label>
                                <input type="file" style={{display:'none'}} onChange={e=>setProjectDetails({...projectDetails,projectImage:e.target.files[0]})}/>
                                <img className='img-fluid' src={preview?preview:"https://www.pulsecarshalton.co.uk/wp-content/uploads/2016/08/jk-placeholder-image.jpg"} alt="project-picture" />
                            </label>
                        </div>
                        <div className="col-lg-6">
                            <div className='mb-3'>
                                <input type="text" className='form-control' placeholder='project title' value={projectDetails.title} onChange={e=>setProjectDetails({...projectDetails,title:e.target.value})} />
                            </div>
                            <div className='mb-3'>
                                <input type="text" className='form-control' placeholder='Language used' value={projectDetails.languages} onChange={e=>setProjectDetails({...projectDetails,languages:e.target.value})} />
                            </div>
                            <div className='mb-3'>
                                <input type="text" className='form-control' placeholder='Github Link' value={projectDetails.github} onChange={e=>setProjectDetails({...projectDetails,github:e.target.value})} />
                            </div>
                            <div className='mb-3'>
                                <input type="text" className='form-control' placeholder='website link' value={projectDetails.website} onChange={e=>setProjectDetails({...projectDetails,website:e.target.value})} />
                            </div>
                            <div className='mb-3'>
                                <input type="text" className='form-control' placeholder='project Overview' value={projectDetails.overview} onChange={e=>setProjectDetails({...projectDetails,overview:e.target.value})} />
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        cancel
                    </Button>
                    <Button variant="primary" onClick={handleAdd}>
                        Add
                    </Button>
                </Modal.Footer>
            </Modal>
            <ToastContainer autoclose={2000} theme="colored" position="top-right" />

        </>
    )
}

export default AddProject