import React, { useState } from 'react'
import Nav from './nav'
import { Container, Row, Col } from 'reactstrap'
import Image from 'next/image'

const Header = props => {
    const [show, setShow] = useState(false)
    const [sidebar, setSidebar] = useState(false);
    const [search, setSearch] = useState(false);

    const clickSidebar = () => {
        setSidebar(!sidebar)
        document.querySelector('.navbar').classList.add('openSidebar')
    }

    return (
        <header className={`${props.className || 'app2'} loding-header nav-abs custom-scroll  `}>
            <Container>
                <Row>
                    <Col>
                        <nav>
                            <a className="m-r-auto" href="/">
                                {props.className == 'agency' ?
                                    <Image width={80} height={80} alt="" className="img-fluid" src="/assets/images/logo/logo.png" />
                                    :
                                    props.className == 'dark' ?
                                    <Image width={80} height={80} alt="" className="img-fluid" src="/assets/images/logo/logo.png" />
                                        :
                                        props.className == 'dark position-relative ecommerce' ?
                                        <Image width={80} height={80} alt="" className="img-fluid" src="/assets/images/logo/logo.png" />
                                            :
                                            props.className == 'dark bg-white ecommerce' ?
                                            <Image width={80} height={80} alt="" className="img-fluid" src="/assets/images/logo/logo.png" />
                                            :
                                                props.className == 'dark agency' ?
                                                <Image width={80} height={80} alt="" className="img-fluid" src="/assets/images/logo/logo.png" />
                                                    :
                                                    props.className == 'saas1' ?
                                                    <Image width={80} height={80} alt="" className="img-fluid" src="/assets/images/logo/logo.png" />

                                                        : <Image width={80} height={80} alt="" className="img-fluid" src="/assets/images/logo/logo.png" />
                                }
                            </a>
                            <div className="responsive-btn">
                                <a className="toggle-nav" onClick={clickSidebar} >
                                    <i aria-hidden="true" className="fa fa-bars text-white"></i>
                                </a>
                            </div>
                            <Nav />
                            {props.shop &&
                                <div className="top-header-right">
                                    <ul>
                                        <li className="search" >
                                            <a href="#" onClick={() => setSearch(!search)}>
                                                <i className="icon-search"></i>
                                            </a>
                                            <div aria-labelledby="dropdownMenuButton" className={`dropdown-menu ${search && `show`} dropdown-menu-right`}>
                                                <form className="form-inline search-form">
                                                    <div className="form-group">
                                                        <label className="sr-only">Email</label>
                                                        <input className="form-control-plaintext" placeholder="Search...."
                                                            type="search" />
                                                        <span className="d-sm-none mobile-search"></span>
                                                    </div>
                                                </form>
                                            </div>
                                        </li>

                               
                                    </ul>
                                </div>
                            }
                        </nav>
                    </Col>
                </Row>
            </Container>
        </header>
    )
}

export default Header
