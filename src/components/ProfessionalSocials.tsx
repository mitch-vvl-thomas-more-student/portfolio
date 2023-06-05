// component: Opleiding

import React, { Suspense } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './../App.css';
import { TypedText } from './TypedText';
import { Loader } from './Loader';
import {Link } from 'react-router-dom'
import { ScrollToNavigate } from './Scroll';

export const ProfessionalSocials = () => {
    return (
        <Suspense fallback={<Loader color={'blue'} size={100} />}>
            <Container fluid className='wrapper background top-right'>
            <ScrollToNavigate />
                <Row className={'ps-0 p-sm-1 pe-lg-5 pt-lg-5 pb-lg-5'}>
                    <Col xs={12} lg={8} className={'ps-lg-3 pb-lg-5 bg-light'} style={{ position: 'relative' }}>
                        <div>
                            <div className='mb-5'>
                                <img src='\assets\network.svg' alt='network vector' style={{ width: 100, display: 'inline' }} className='ms-2' />
                                <h1 className={'display-2 naam my-5 d-inline'} style={{ position: 'absolute' }}><TypedText color={'purple'} fontWeight={900} text={['Professional Socials', 'Let\'s Connect!']} /></h1>
                            </div>

                            <Link to="https://github.com/mitch-vvl-thomas-more-student" rel='follow noopener noreferrer' target="_blank" className={'text-decoration-none'}>
                                <h2 className={'display-4 my-5 fw-bold'}>+ mitch-vvl-thomas-more-student</h2>
                                <img src='\assets\githubConnect.png' alt='Connect with Github' style={{ width: 300 }} className='ms-2' />
                            </Link>
                            <Link to="https://www.linkedin.com/in/mitch-van-vlierberghe/" rel='follow noopener noreferrer' target="_blank" className={'text-decoration-none'}>
                                <h2 className={'display-4 my-5 fw-bold'}>+ mitch-van-vlierberghe</h2>
                                <img src='\assets\linkedinConnect.png' alt='Connect with Linkedin' style={{ width: 300 }} className='ms-2' />
                            </Link>
                        </div>
                    </Col>
                    <Col xs={12} lg={4} className={'bg-light d-grid p-5'}>
                        <img src='\assets\githubLogo.png' alt='Logo Github' className={'img-fluid d-block slide-in-br'} style={{ margin: 'auto' }} />
                        <img src='\assets\linkedinLogo.png' alt='Logo Linkedin' className={'img-fluid d-block slide-in-br-3'} style={{ margin: 'auto' }} />
                    </Col>
                </Row>
            </Container>
        </Suspense>
    )
}