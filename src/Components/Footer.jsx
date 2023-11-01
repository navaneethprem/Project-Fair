import React from 'react'
import { Link } from 'react-router-dom'


function Footer() {
    return (
        <div style={{ width: '100%', height: '300px', background:'green',color:'white'}} className='d-flex flex-column justify-content-center align-items-center'>
            <div className="footer-div d-flex justify-content-evenly w-100 flex-wrap">
                <div className="website" style={{ width: '400px' }}>
                    <h5><i className="fa-solid fa-cart-shopping"></i>
                        E kart</h5>
                    <h6 className='pt-4'>Designed and built with all the love in the world by the Bootstrap team with the help of our contributors.</h6>
                    <h6>Code licensed Haseeb, docs CC BY 3.0.</h6>
                    <p> Currently v1.0.0</p>
                </div>
                <div className="links d-flex flex-column">
                    <h4>Links</h4>
                    <Link to={'/'} style={{ textDecoration: "none", color: "white" }}>Landing Page</Link>
                    <Link to={'/home'} style={{ textDecoration: "none", color: "white" }}>Home</Link>
                    <Link to={'/watch-history'} style={{ textDecoration: "none", color: "white" }}>Watch History</Link>

                </div>
                <div className="guides d-flex flex-column">
                    <h4>Guides</h4>
                    <Link to={'https://getbootstrap.com/'} style={{ textDecoration: "none", color: "white" }}>React</Link>
                    <Link to={'https://react-bootstrap.netlify.app/'} style={{ textDecoration: "none", color: "white" }}>React Bootstrap</Link>
                    <Link to={'https://react-bootstrap.netlify.app/'} style={{ textDecoration: "none", color: "white" }}>Routing</Link>
                </div>
                <div className="contact">
                    <h4>Contact Us</h4>
                    <div className="sub d-flex mt-3">
                        <input type="text" className="form-control" placeholder='Enter Your Email Id' />
                        <button className='btn btn-primary ms-3'>Subscribe</button>
                    </div>
                    <div className="icons fs-4 d-flex justify-content-evenly mt-3">
                    <Link to={'https://mail.google.com/mail/u/0/#inbox'} style={{ textDecoration: "none", color: "white" }}><i className="fa-solid fa-envelope"></i></Link>
                    <Link to={'https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D'} style={{ textDecoration: "none", color: "white" }}><i className="fa-brands fa-twitter"></i></Link>
                    <Link to={'https://www.linkedin.com/feed/'} style={{ textDecoration: "none", color: "white" }}><i className="fa-brands fa-linkedin"></i></Link> 
                    <Link to={'https://www.instagram.com/'} style={{ textDecoration: "none", color: "white" }}><i className="fa-brands fa-instagram"></i></Link> 

                    </div>
                </div>
            </div>
            <p>Copyright © 2023 E-kart. Built with React.</p>
        </div>
    )
}

export default Footer