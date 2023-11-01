import React from 'react'
import { Link } from 'react-router-dom'
import loginImage from '../Assets/login.png'
import { Form } from 'react-bootstrap'

function Auth({ register }) {
    const isRegisterForm = register ? true : false
    return (
        <div style={{ width: "100%", height: "100vh" }} className='d-flex justify-content-center align-items-center'>
            <div className='w-75 container'>
                <Link style={{ textDecoration: "none", color: "black" }} to={'/'}>Back to home</Link>
                <div className='card shadow p-5 bg-success'>
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <img width={'100%'} src={loginImage} alt="Auth Image" />
                        </div>
                        <div className="col-lg-6">
                            <div className="d-flex align-items-center flex-column">
                                <h1 className='fw-bolder text-light'><i class="fa-brands fa-algolia fa-fade"></i> Project Fair</h1>
                                <h5 className='fw-bolder mt-2 pb-3 text-light'>
                                    {
                                        isRegisterForm ? "Sign up to your Account" : "Sign in to your Account"
                                    }
                                </h5>
                                    <Form className='text-light w-100'>
                                        {
                                            isRegisterForm &&
                                            <Form.Group className='mb-3 w-100' controlId='formBasicName'>
                                                <Form.Control type='text' placeholder='Username' />
                                            </Form.Group>
                                        }
                                        <Form.Group className='mb-3 w-100' controlId='formBasicName'>
                                                <Form.Control type='text' placeholder='Enter your email id' />
                                        </Form.Group>
                                        <Form.Group className='mb-3 w-100' controlId='formBasicName'>
                                                <Form.Control type='password' placeholder='Enter your password' />
                                        </Form.Group>
                                        {
                                            isRegisterForm ? 
                                            <div>
                                                <button className='btn btn-light'>Register</button>
                                                <p>Already have an Account ? Click here to <Link style={{textDecoration:"none",color:"white"}} to={'/login'}>Login</Link></p>
                                            </div>
                                            :
                                            <div className='text-center'>
                                                <button className='btn btn-light'>Login</button>
                                                <p>New User ? Register Now <Link style={{color:"white"}} to={'/login'}>Login</Link></p>
                                            </div>
                                        }
                                    </Form>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Auth