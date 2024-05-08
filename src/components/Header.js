import React from 'react';
import { Link } from 'react-router-dom';
import image02 from './image02.png';


const Header = () => {
    return (
        <div className='body'>

            <div className='container'>
                <nav className="navbar navbar-expand-lg navbar  ftco-navbar-light site-navbar-target" id="ftco-navbar">


                    <a className="navbar-brand" href="/">Varun</a>
                    <button className="navbar-toggler js-fh5co-nav-toggle fh5co-nav-toggle" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="oi oi-menu"></span> Menu
                    </button>
                    <div className="collapse navbar-collapse" id="ftco-nav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item1"><a href="#home" className="nav-link1 active"><span>Home</span></a></li>
                            <li className="nav-item"><a href="#about" className="nav-link"><span>About</span></a></li>
                            <li className="nav-item"><a href="#resume-section" className="nav-link"><span>Resume</span></a></li>
                            <li className="nav-item"><a href="#services-section" className="nav-link"><span>Services</span></a></li>
                            <li className="nav-item"><a href="#skills-section" className="nav-link"><span>Skills</span></a></li>
                            <li className="nav-item"><a href="#projects-section" className="nav-link"><span>Projects</span></a></li>
                            <li className="nav-item"><a href="#contact-section" className="nav-link"><span>Contact</span></a></li>
                        </ul>
                    </div>

                </nav>
            </div>


            <section id='home'>
                <div class="slide01">
                    <div class="section homepage-section-banner">
                        <div class="home_vedio-new">
                            <div class="container">
                                <div class="row justify-center posiieee">
                                    <div class="col-md-6 ">
                                        <div class="text">
                                            <span class="subheading">Hello!</span>
                                            <h1 class="mb-4 mt-3">I'm <span>Varun Karthick</span></h1>
                                            <h2 class="mb-4">A Frontend Developer</h2>
                                            <div class="hire">
                                                <p><a href="#" class="btn btn-primary py-3 px-4">Hire me</a> <a href="#" class="btn btn-white btn-outline-white py-3 px-4">My works</a></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6 ">
                                        <div class="image01">
                                            <img src={image02} class="hover-image"></img>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



           








            <section class="ftco-section ftco-no-pb" id="resume-section">
                <div class="container">
                    <div class="row justify-content-center pb-5">
                        <div class="col-md-10 heading-section text-center ftco-animate fadeInUp ftco-animated">
                            <h1 class="big big-2">Resume</h1>
                            <h2 class="mb-4">Resume</h2>
                            <p>Passionate about blockchain technology and proficient in frontend development for creating user-friendly interfaces.</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="resume-wrap ftco-animate fadeInUp ftco-animated">
                                <span class="date">2018-2020</span>
                                <h2>St.John's Matric Hr.Sec.School</h2>
                                <span class="position">SSC-79.8%</span>
                                <p class="mt-4">I successfully completed my Secondary School Certificate (SSC) education at St. John's Matric Hr. Sec. School. I attained a notable academic achievement with a score of 79.8%.</p>
                            </div>
                            <div class="resume-wrap ftco-animate fadeInUp ftco-animated">
                                <span class="date">2018-2020</span>
                                <h2>Mangayarkarasi Hr.Sec.School</h2>
                                <span class="position">HSC-66.17%</span>
                                <p class="mt-4">I have graduated from Mangayarkarasi Hr. Sec. School with a commendable achievement of 79.8% in my Higher Secondary Certificate (HSC) exams.</p>
                            </div>
                        </div>

                        <div class="col-md-6">
                            <div class="resume-wrap ftco-animate fadeInUp ftco-animated">
                                <span class="date">2020-2024</span>
                                <h2>Mangayarkarasi College Of Engineering</h2>
                                <span class="position">CGPA-8.0</span>
                                <p class="mt-4">I have successfully completed my college education at Mangayarkarasi College of Engineering, achieving a notable CGPA of 8.0.</p>
                            </div>
                            <div class="resume-wrap ftco-animate fadeInUp ftco-animated">
                                <span class="date">2024 . . .</span>
                                <h2>Frontend Developer</h2>
                                <span class="position">    </span>
                                <p class="mt-4">Passionate about blockchain technology, I'm proficient in frontend development for creating user-friendly interfaces and possess foundational knowledge of the Solidity language, essential for blockchain development.</p>
                            </div>
                        </div>
                    </div>
                    <div class="row justify-content-center mt-5">
                        <div class="col-md-6 text-center ftco-animate fadeInUp ftco-animated">
                            <p><a href="#" class="btn btn-primary py-4 px-5">Download CV</a></p>
                        </div>
                    </div>
                </div>
            </section>







            <section class="ftco-section" id="services-section">
                <div class="container">
                    <div class="row justify-content-center py-5 mt-5">
                        <div class="col-md-12 heading-section text-center ftco-animate fadeInUp ftco-animated">
                            <h1 class="big big-2">Services</h1>
                            <h2 class="mb-4">Services</h2>
                            <p>I'm a frontend developer with a keen interest in blockchain technology, continuously learning and analyzing cryptocurrencies to stay informed and enthusiastic about the evolving digital landscape.</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-4 text-center d-flex ftco-animate fadeInUp ftco-animated">
                            <a href="#" class="services-1">
                                <span class="icon">
                                    <i class="fa-regular fa-window-maximize"></i>
                                </span>
                                <div class="desc">
                                    <h3 class="mb-5">Web Developer</h3>
                                </div>
                            </a>
                        </div>
                        <div class="col-md-4 text-center d-flex ftco-animate fadeInUp ftco-animated">
                            <a href="#" class="services-1">
                                <span class="icon">
                                    <i class="fa-solid fa-code"></i>
                                </span>
                                <div class="desc">
                                    <h3 class="mb-5">Frontend Development</h3>
                                </div>
                            </a>
                        </div>
                        <div class="col-md-4 text-center d-flex ftco-animate fadeInUp ftco-animated">
                            <a href="#" class="services-1">
                                <span class="icon">
                                    <i class="fa-solid fa-link"></i>
                                </span>
                                <div class="desc">
                                    <h3 class="mb-5">Blockchain Learner</h3>
                                </div>
                            </a>
                        </div>

                        <div class="col-md-4 text-center d-flex ftco-animate fadeInUp ftco-animated">
                            <a href="#" class="services-1">
                                <span class="icon">
                                    <i class="fa-solid fa-sack-dollar"></i>
                                </span>
                                <div class="desc">
                                    <h3 class="mb-5">Crypto Enthusiast</h3>
                                </div>
                            </a>
                        </div>
                        <div class="col-md-4 text-center d-flex ftco-animate fadeInUp ftco-animated">
                            <a href="#" class="services-1">
                                <span class="icon">
                                    <i class="fa-solid fa-money-bill-trend-up"></i>
                                </span>
                                <div class="desc">
                                    <h3 class="mb-5">Crypto Market Analyser</h3>
                                </div>
                            </a>
                        </div>
                        <div class="col-md-4 text-center d-flex ftco-animate fadeInUp ftco-animated">
                            <a href="#" class="services-1">
                                <span class="icon">
                                    <i class="fa-brands fa-btc"></i>
                                </span>
                                <div class="desc">
                                    <h3 class="mb-5">Crypto Mining and Staking</h3>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>






            <section class="ftco-section" id="skills-section">
                <div class="container">
                    <div class="row justify-content-center pb-5">
                        <div class="col-md-12 heading-section text-center ftco-animate fadeInUp ftco-animated">
                            <h1 class="big big-2">Skills</h1>
                            <h2 class="mb-4">My Skills</h2>
                            <p>Skilled in web development with HTML, CSS, and ReactJS, and showing budding interest in Solidity for blockchain, coupled with a strong passion for cryptocurrencies.</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6 animate-box">
                            <div class="progress-wrap ftco-animate fadeInUp ftco-animated">
                                <h3>HTML</h3>
                                <div class="progress">
                                    <div class="progress-bar color-1" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
                                        <span>90%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 animate-box">
                            <div class="progress-wrap ftco-animate fadeInUp ftco-animated">
                                <h3>CSS</h3>
                                <div class="progress">
                                    <div class="progress-bar color-2" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">
                                        <span>85%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 animate-box">
                            <div class="progress-wrap ftco-animate fadeInUp ftco-animated">
                                <h3>ReactJS</h3>
                                <div class="progress">
                                    <div class="progress-bar color-3" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">
                                        <span>75%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 animate-box">
                            <div class="progress-wrap ftco-animate fadeInUp ftco-animated">
                                <h3>Crypto Enthusiast</h3>
                                <div class="progress">
                                    <div class="progress-bar color-4" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
                                        <span>90%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 animate-box">
                            <div class="progress-wrap ftco-animate fadeInUp ftco-animated">
                                <h3>Solidity</h3>
                                <div class="progress">
                                    <div class="progress-bar color-5" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">
                                        <span>30%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 animate-box">
                            <div class="progress-wrap ftco-animate fadeInUp ftco-animated">
                                <h3>Blockchain Development</h3>
                                <div class="progress">
                                    <div class="progress-bar color-6" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
                                        <span>46%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>




















            <section class="ftco-section contact-section ftco-no-pb" id="contact-section">
                <div class="container">
                    <div class="row justify-content-center mb-5 pb-3">
                        <div class="col-md-7 heading-section text-center ftco-animate fadeInUp ftco-animated">
                            <h1 class="big big-2">Contact</h1>
                            <h2 class="mb-4">Contact Me</h2>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
                        </div>
                    </div>

                    <div class="row d-flex contact-info mb-5">
                        <div class="col-md-6 col-lg-3 d-flex ftco-animate fadeInUp ftco-animated">
                            <div class="align-self-stretch box p-4 text-center">
                                <div class="icon d-flex align-items-center justify-content-center">
                                    <i class="fa-solid fa-location-dot"></i>
                                </div>
                                <h3 class="mb-4">Address</h3>
                                <p>New Vilangudi, Madurai,TamilNadu.</p>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-3 d-flex ftco-animate fadeInUp ftco-animated">
                            <div class="align-self-stretch box p-4 text-center">
                                <div class="icon d-flex align-items-center justify-content-center">
                                    <i class="fa-solid fa-phone"></i>
                                </div>
                                <h3 class="mb-4">Contact Number</h3>
                                <p><a href="tel://1234567920">+91 92453 52692</a></p>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-3 d-flex ftco-animate fadeInUp ftco-animated">
                            <div class="align-self-stretch box p-4 text-center">
                                <div class="icon d-flex align-items-center justify-content-center">
                                    <i class="fa-solid fa-envelope"></i>
                                </div>
                                <h3 class="mb-4">Email Address</h3>
                                <p><a href="mailto:info@yoursite.com">varunkarthick397@gmail.com</a></p>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-3 d-flex ftco-animate fadeInUp ftco-animated">
                            <div class="align-self-stretch box p-4 text-center">
                                <div class="icon d-flex align-items-center justify-content-center">
                                    <i class="fa-solid fa-earth-americas"></i>
                                </div>
                                <h3 class="mb-4">Website</h3>
                                <p><a href="#">Mysite.com</a></p>
                            </div>
                        </div>
                    </div>

                   
                    
                </div>
            </section>










            <footer class="ftco-footer ftco-section">
                <div class="container">
                    <div class="row mb-5">
                        <div class="col-md">
                            <div class="ftco-footer-widget mb-4">
                                <h2 class="ftco-heading-2">About</h2>
                                <p>Frontend developers sculpt digital experiences, blending creativity with code to shape intuitive interfaces that captivate users.</p>
                                <ul class="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
                                    <li class="ftco-animate fadeInUp ftco-animated"><a href="#"><i class="fa-brands fa-x-twitter"></i></a></li>
                                    <li class="ftco-animate fadeInUp ftco-animated"><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
                                    <li class="ftco-animate fadeInUp ftco-animated"><a href="#"><i class="fa-brands fa-facebook"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-md">
                            <div class="ftco-footer-widget mb-4 ml-md-4">
                                <h2 class="ftco-heading-2">Links</h2>
                                <ul class="list-unstyled">
                                    <li><a href="#"><span class="fa-solid fa-arrow-right mr-2"></span>Home</a></li>
                                    <li><a href="#"><span class="fa-solid fa-arrow-right mr-2"></span>About</a></li>
                                    <li><a href="#"><span class="fa-solid fa-arrow-right mr-2"></span>Resume</a></li>
                                    <li><a href="#"><span class="fa-solid fa-arrow-right mr-2"></span>Skills</a></li>
                                    <li><a href="#"><span class="fa-solid fa-arrow-right mr-2"></span>Contact</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-md">
                            <div class="ftco-footer-widget mb-4">
                                <h2 class="ftco-heading-2">Services</h2>
                                <ul class="list-unstyled">
                                    <li><a href="#"><span class="fa-solid fa-arrow-right mr-2"></span>Web Developer</a></li>
                                    <li><a href="#"><span class="fa-solid fa-arrow-right mr-2"></span>Frontend Development</a></li>
                                    <li><a href="#"><span class="fa-solid fa-arrow-right mr-2"></span>Blockchain Learner</a></li>
                                    <li><a href="#"><span class="fa-solid fa-arrow-right mr-2"></span>Crypto Enthusiast</a></li>
                                    <li><a href="#"><span class="fa-solid fa-arrow-right mr-2"></span>Crypto Analyser</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-md">
                            <div class="ftco-footer-widget mb-4">
                                <h2 class="ftco-heading-2">Have a Questions?</h2>
                                <div class="block-23 mb-3">
                                    <ul>
                                        <li><span class="fa-solid fa-location-dot"></span><span class="text">New Vilangudi, Madurai.</span></li>
                                        <li><span class="fa-solid fa-phone"></span><span class="text">+91 9245353692</span></li>
                                        <li><span class="fa-regular fa-envelope"></span><span class="text">varunkarthick397@gmail.com</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12 text-center">

                            <p>Copyright ©2024 All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </footer>


        </div>
    );
}

export default Header;
