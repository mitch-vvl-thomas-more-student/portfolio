// component: Algemeen

import React, { Suspense } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import './../App.css';
import { Loader } from './Loader';
import { ScrollToNavigate } from './Scroll';

export const Algemeen = () => {
    return (
        <Suspense fallback={<Loader color={'blue'} size={100} />}>
            <Container fluid className='wrapper background top-right'>
                <ScrollToNavigate />
                <Row className={'ps-0 p-sm-1 pe-lg-5 pt-lg-5 pb-lg-5'}>
                    {/* <div className='d-none d-lg-block rightTopLinear'></div> */}
                    <Col xs={12} lg={6} className={'bg-light'}>
                        <img src='\assets\babyvoetjes.jpg' alt='Baby voetjes' className={'img-fluid'}></img>
                    </Col>
                    <Col xs={12} lg={6} className={'bg-light'}>
                        <h1 className={'display-2 naam my-5'}>Algemeen</h1>
                        <ul className='display-6 my-5'>
                            <li>+ 35 jaar</li>
                            <li>+ Papa van 2 prachtige kindjes</li>
                            <li>+ Gelukkig getrouwd</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </Suspense>
    )
}