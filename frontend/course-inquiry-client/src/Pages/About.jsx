import React from 'react'
import '../styles/About.css'
import headerimg from "../icons/aboutheader.png";
import gia from "../icons/gia.png"
import jake from"../icons/jake.png"
import andrew from "../icons/andrew.png"
import temi from "../icons/temi.png"
import mesfin from "../icons/mesfin.PNG"
const About= () =>{
    return(
        <div className="aboutcontainer">
            <div className='banner'>
                <img src={headerimg} alt=""/>

                <div className="bannerText"><h1>About Us</h1></div>
            </div>
            <div className="team">
                <div className="member">
                    <div className='items shadow'>
                        <div className='img'>
                            <img src={gia} alt=''/>

                        </div>
                        <div className='details'>
                            <h4>Gia T</h4>
                            <h6>Frontend Developer</h6>
                        </div>
                    </div>
                </div>
                <div className="member">
                    <div className='items shadow'>
                        <div className='img'>
                            <img src={andrew} alt=''/>
                            <div className='overlay'>
                                <i className='fab fa-facebook-f icon'></i>
                                <i className='fab fa-twitter icon'></i>
                                <i className='fab fa-instagram icon'></i>
                                <i className='fab fa-tiktok icon'></i>
                            </div>
                        </div>
                        <div className='details'>
                            <h4>Andrew O</h4>
                            <h6>Backend Developer</h6>
                        </div>
                    </div>

                </div>
                <div className="member">
                    <div className='items shadow'>
                        <div className='img'>
                            <img src={jake} alt=''/>
                            <div className='overlay'>
                                <i className='fab fa-facebook-f icon'></i>
                                <i className='fab fa-twitter icon'></i>
                                <i className='fab fa-instagram icon'></i>
                                <i className='fab fa-tiktok icon'></i>
                            </div>
                        </div>
                        <div className='details'>
                            <h4>Jake K</h4>
                            <h6>Team Leader & UI Design</h6>
                        </div>
                    </div>

                </div>
                <div className="member">
                    <div className='items shadow'>
                        <div className='img'>
                            <img src={temi} alt=''/>
                            <div className='overlay'>
                                <i className='fab fa-facebook-f icon'></i>
                                <i className='fab fa-twitter icon'></i>
                                <i className='fab fa-instagram icon'></i>
                                <i className='fab fa-tiktok icon'></i>
                            </div>
                        </div>
                        <div className='details'>
                            <h4>Temi S</h4>
                            <h6>Product Owner & Analyst</h6>
                        </div>
                    </div>

                </div>
                <div className="member">
                    <div className='items shadow'>
                        <div className='img'>
                            <img src={mesfin} alt=''/>
                            <div className='overlay'>
                                <i className='fab fa-facebook-f icon'></i>
                                <i className='fab fa-twitter icon'></i>
                                <i className='fab fa-instagram icon'></i>
                                <i className='fab fa-tiktok icon'></i>
                            </div>
                        </div>
                        <div className='details'>
                            <h4>Mesfin M</h4>
                            <h6>QA Tester</h6>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default About