import React from 'react';
import { ProjectsData } from '../database/layouts/resume/database';
import {Container,Row,Col} from 'reactstrap'
import Image from 'next/image';
const Projects = () => (
    <section className="resume services bg-pink" id="Projects">
        <Container>
            <Row>
                <Col md="8" className="offset-md-2">
                    <div className="title title2">
                        <h6 className="font-primary borders main-text text-uppercase"><span>details</span></h6>
                        <div className="sub-title">
                            <div>
                                <h2 className="title-text">Projects</h2>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row>
                {ProjectsData.map((item, i) => {
                    return (
                        <Col lg="3" sm="6" key={i}>
                            <div className="service bg-white">
                                <div className="img-block">
                                    <Image width={80} height={80} alt="" className="service-img img-fluid"
                                        src={item.img} />
                                </div>
                                <div className="service-feature">
                                    <h4 className="feature-text text-center">{item.name}</h4>
                                    <p>{item.desc}</p>
                                </div>
                            </div>
                        </Col>
                    )
                })}
            </Row>
        </Container>
    </section>
)

export default Projects;