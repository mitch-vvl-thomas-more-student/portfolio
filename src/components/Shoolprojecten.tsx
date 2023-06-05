// react component with 2 elements - left side: white square with centered text, right side: square with background image

import React, { Suspense } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './../App.css';
import { Github } from 'react-bootstrap-icons';
import { Loader } from './Loader';
import { Link } from 'react-router-dom'
import { ScrollToNavigate } from './Scroll';

export const SchoolProjecten = () => {
    return (
        <Suspense fallback={<Loader color={'blue'} size={100} />}>
            <Container fluid className='background bottom-white' style={{ overflow: 'hidden' }}>
            <ScrollToNavigate />
                <Row className={'p-sm-1 p-lg-5'}>
                    <Col xs={12} lg={6} className={'p-sm-1 p-lg-5 bg-light d-flex align-content-center justify-content-center align-items-center'}>
                        <img src='\assets\code.jpg' alt='afbeelding van programmacode' className={'img-fluid w-100'}></img>
                    </Col>
                    <Col xs={12} lg={6} className={'p-sm-1 p-lg-5 bg-light'}>
                        <h1 className={'display-2 naam'}>Mijn 3 favoriete schoolprojecten</h1>
                        <div className={'my-5'}>
                            <ol className={'display-6 my-5'}>
                                <li className={'slide-in-br'}>+ <Link to='https://project-de-mol.web.app/' target='_blank' rel='noopener noreferrer'>Project de mol</Link> – Angular/Ionic – Mobiele applicaties <br />
                                </li>
                                <li className={'slide-in-br-2'}>+ Frituur ‘t half kieke (JAVA) – Projecten voor het werkveld</li>
                                <li className={'slide-in-br-3'}>+ De online bibliotheek – Datamanipulatie vanuit een programma</li>
                            </ol>
                            <p className={'text-end'}>
                                <Link to="https://github.com/mitch-vvl-thomas-more-student" className='roll-in-left' ><Github size={64} /></Link>
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Suspense>
    );
}