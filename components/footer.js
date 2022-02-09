import React from 'react';
import {Container,Row,Col} from 'reactstrap'
const Footer = () => (
    <footer className="resume copyright copyright-bg">
        <Container>
            <Row>
                <Col xs="12">
                    <div className="link link-horizontal">
                        <ul className="justify-content-center">
                            <li><a className="copyright-text" href="#Home">Home</a></li>
                            <li><a className="copyright-text" href="#Skills">Skills</a></li>
                            <li><a className="copyright-text" href="#Experiences">Experiences</a></li>
                            <li><a className="copyright-text" href="#Projects">Projects</a></li>
                        </ul>
                    </div>
                    <hr />
                </Col>
                <Col xs="12">
                    <div className="text-center">
                        <div className="social-link link-horizontal">
                            <ul className="justify-content-center">
                                <li><a className="copyright-text" href="https://www.facebook.com/zyadelashwal"><i aria-hidden="true" className="fa fa-facebook"></i></a>
                                </li>
                                <li><a className="copyright-text" href="https://twitter.com/zyadelashwal"><i aria-hidden="true" className="fa fa-twitter"></i></a>
                                </li>
                                <li><a className="copyright-text" href="https://github.com/zyadelashwal"><i aria-hidden="true" className="fa fa-github"></i></a>
                                </li>
                                <li><a className="copyright-text " href="https://www.instagram.com/zyad_elashwal/"><i aria-hidden="true"
                                    className="fa fa-instagram"></i></a></li>
                                     <li><a className="copyright-text " href="https://www.linkedin.com/in/zyad-el-ashwal-18ab6ab7/"><i aria-hidden="true"
                                    className="fa fa-linkedin"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </Col>
                <Col xs="12">
                    <div className="m-l-auto center-para">
                        <h6 className="copyright-text text-center">© 2022 powered by Zyad Mahmoud</h6>
                    </div>
                </Col>
            </Row>
        </Container>
    </footer>
)

export default Footer;