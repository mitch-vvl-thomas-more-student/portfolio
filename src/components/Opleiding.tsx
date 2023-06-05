// component: Opleiding

import React, { Suspense } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './../App.css';
import { Loader } from './Loader';
import { ScrollToNavigate } from './Scroll';

export const Opleiding = () => {
    return (
        <Suspense fallback={<Loader color={'blue'} size={100} />}>
            <Container fluid className='wrapper background top-right'>
            <ScrollToNavigate />
                <Row className={'ps-0 p-sm-1 pe-lg-5 pt-lg-5 pb-lg-5'}>
                    <Col xs={12} lg={6} className={'bg-light'}>
                        <img src='\assets\opleiding.jpg' alt='opleiding image' className={'img-fluid slide-in-left w-100'}></img>
                    </Col>
                    <Col xs={12} lg={6} className={'bg-light'}>
                        <h1 className={'display-2 naam my-5'}>Opleiding</h1>
                        <ul className='display-6 my-5'>
                            <li>+ Graduaat in het programmeren Thomas More Hogeschool Lier</li>
                            <li>+ Ventigrate Academy:</li>
                            <ul style={{ listStyle: 'outside' }}>
                                <li>SharePoint</li>
                                <li>Microsoft 365</li>
                                <li>Power Platform</li>
                                <li>SPFx</li>
                                <li>Azure</li>
                            </ul>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </Suspense>
    )
}