import Image from 'next/image';
import React, { useState } from 'react';
import Typed from 'react-typed';
import {Container,Row,Col,Modal, ModalBody,Form, Label} from 'reactstrap'

const Banner = () => {
    const [modal, setModal] = useState();
    const toggle = () => {
        setModal(!modal)
    }
    return(
    <section className="resume header" id="Home">
        <div className="header7-content">
            <div className="resume bg bg-pink">
                <Container>
                    <Row>
                        <Col lg="5" md="6">
                            <Image layout='fill' alt="" className="img-fluid set-abs bottom-0 right-0" src="/assets/images/resume/Zyad.png" />
                        </Col>
                        <Col lg="6" md="6" className="offset-lg-1">
                            <div className="center-text">
                                <div>
                                    <div className="header-sub-text">
                                        <h5 className="text-hash text-uppercase"># resume</h5>
                                    </div>
                                    <div className="header-text">
                                        <h2><span className="bold-text">Hi, I’m</span><br /> Zyad Mahmoud</h2>
                                    </div>
                                    <div className="header-sub-text">
                                        <h4 className="font-secondary">Senior , <span className="typed-resume"><Typed
                                                strings={['Front End Developer']}
                                                typeSpeed={80}
                                                backSpeed={50}
                                                showCursor={false}
                                                loop >
                                            </Typed></span></h4>
                                    </div>
                                    <div className="header-sub-text">
                                        <p className="font-secondary font-large">Front End developer with Bachelor’s degree in Computer Science and familiarity with several programming languages , and I have +3 years experience. Seeking for the position of a Programmer to utilize teamwork and leadership skills in coordinating the effort of programmers. Also, bringing exceptional skills in designing, coding, testing, and implementing customizations to exceed customer expectations.</p>
                                    </div>
                                    <div className="link-horizontal">
                                        <ul>
                                            <li><a href='#' onClick={toggle} className="btn btn-default primary-btn back-white">Contact me</a></li>
                                            <li><a href='/Zyad-Cv-pdf.pdf' target={"_blank"} 
                                                    className="btn btn-default primary-btn back-white">Download Cv</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                          
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
        <Modal isOpen={modal} toggle={toggle}>
                
                <ModalBody className="agency login-modal p-0">
                    <div className="modal-body text-center">
                        <h3 className="m-b-20">Contact Information</h3>
                        <div className="bg-white">

                            <Form>
                                <Row>
                                    <Col>
                                      
                                            <Label htmlFor="name">Mobile :</Label><Label htmlFor="name">+201060080362</Label>

                                    </Col>

                                </Row>
                                <Row>
                                    <Col>
                                       
                                            <Label htmlFor="Email">Email : </Label> <Label htmlFor="Email">zyadelashwal32@gmail.com</Label>
                                 
                                    </Col>
                                   
                                </Row>
                               
                            </Form>
                        </div>
                        <div className="typography-box">
                            <div className="typo-content">
                                <div className="socials-lists">
                                    <ul className="socials-horizontal justify-content-center">
                                        <li>
                                            <a href="https://www.facebook.com/zyadelashwal"><i aria-hidden="true"
                                                        className="fa fa-facebook center-content"></i></a>
                                        </li>
                                        <li>
                                            <a href="https://twitter.com/zyadelashwal"><i aria-hidden="true" className="fa fa-twitter center-content"></i></a>
                                        </li>
                                        <li>
                                            <a href="https://github.com/zyadelashwal"><i aria-hidden="true" className="fa fa-github center-content"></i></a>
                                        </li>
                                        <li>
                                            <a href="https://www.linkedin.com/in/zyad-el-ashwal-18ab6ab7/"><i aria-hidden="true" className="fa fa-linkedin center-content"></i></a>
                                        </li>
                                        <li>
                                            <a href="https://www.instagram.com/zyad_elashwal/"><i aria-hidden="true" className="fa fa-instagram center-content"></i></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <a aria-label="Close" className="btn btn-default primary-btn m-t-20" href='#' onClick={toggle} data-dismiss="modal">close
                    </a>
                    </div>
                </ModalBody>
            </Modal>
    </section>
)
    }
export default Banner;