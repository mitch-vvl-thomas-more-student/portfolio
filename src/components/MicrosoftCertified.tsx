// component: Opleiding

import React, { Suspense } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './../App.css';
import { TypedText } from './TypedText';
import { Loader } from './Loader';
import { ScrollToNavigate } from './Scroll';

export const MicrosoftCertified = () => {
    return (
        <Suspense fallback={<Loader color={'blue'} size={100} />}>
            <Container fluid className='wrapper background top-right'>
            <ScrollToNavigate />
                <Row className={'ps-0 p-sm-1 pe-lg-5 pt-lg-5 pb-lg-5'}>
                    <Col xs={12} lg={6} className={'bg-light d-flex justify-content-center align-items-center'}>
                        <img src='\assets\microsoft365Certified.png' alt='Microsoft 365 Certificaat' className={'img-fluid slide-in-left'}></img>
                    </Col>
                    <Col xs={12} lg={6} className={'bg-light text-center'} style={{ position: 'relative' }}>
                        <div>
                            <h1 className={'display-2 naam my-5'}>Microsoft 365 <TypedText color={'purple'} fontWeight={900} text={['Certified']} /></h1>
                            <h2 className={'display-4 my-5 fw-bold'}>Teams Application Developer Associate</h2>
                        </div>

                    </Col>
                </Row>
            </Container>
        </Suspense>
    )
}