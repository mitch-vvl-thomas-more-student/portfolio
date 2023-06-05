// react component with 2 elements - left side: white square with centered text, right side: square with background image

import React, { Suspense } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './../App.css';
import { Warning } from './Warning';
import { Loader } from './Loader';
import { ScrollToNavigate } from './Scroll';


export const Php = () => {
    return (
        <Suspense fallback={<Loader color={'blue'} size={100} />}>
            <Container fluid className='background bottom-white' style={{ overflow: 'hidden' }}>
            <ScrollToNavigate />
                <Row className={'p-sm-1 p-lg-5'}>
                    <Col xs={12} lg={9} className={'p-sm-1 p-lg-5 bg-light'}>
                        <div className={'my-5'}>
                            <h1 className={'display-2 naam'}>Software in PHP7</h1>
                            <p>(procedural)</p>
                            <ul className={'display-6 my-5'}>
                                <li className={'slide-in-br'}>+ Digital signage</li>
                                <li className={'slide-in-br-2'}>+ QR stock manager</li>
                                <li className={'slide-in-br-3'}>+ Digital checklist(s)</li>
                                <li className={'slide-in-br-4'}>+ Reservation manager</li>
                            </ul>
                        </div>
                    </Col>
                    <Col xs={12} lg={3} className={'p-sm-1 p-lg-5 bg-light d-flex align-content-center justify-content-center align-items-end'}>
                        <img src='\assets\cpa.jpg' alt='logo Crown Plaza Antwerpen' className={'img-fluid'}></img>
                    </Col>
                    <Warning />
                </Row>
                <div className='bg-white'></div>
            </Container>
        </Suspense>
    );
}