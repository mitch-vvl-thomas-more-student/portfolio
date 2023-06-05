// react component with 2 elements - left side: white square with centered text, right side: square with background image

import React, { Suspense } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './../App.css';
import { Warning } from './Warning';
import { TypedText } from './TypedText';
import { Loader } from './Loader';
import { ScrollToNavigate } from './Scroll';


export const PersoonlijkeTroeven = () => {
    return (
        <Suspense fallback={<Loader color={'blue'} size={100} />}>
            <Container fluid className='background bottom-white' style={{ overflow: 'hidden' }}>
            <ScrollToNavigate />
                <Row className={'p-sm-1 p-lg-5'}>
                    <Col xs={12} className='bg-light'>
                        <h1 className={'display-2 naam'}>Persoonlijke <TypedText text={['troeven', 'kwaliteiten', 'eigenschappen']} /></h1>
                    </Col>
                    <Col xs={12} lg={6} className={'p-sm-1 p-lg-5 bg-light'}>
                        <div className={'my-5'}>
                            <ul className={'display-6 my-5'}>
                                <li>+ Enorm leergierig</li>
                                <li>+ Gemotiveerd</li>
                                <li>+ Flexibel</li>
                                <li>+ Nauwkeurig</li>
                                <li>+ Resultaat gericht</li>
                                <li>+ Organisatie talent</li>
                                <li>+ Team player</li>
                            </ul>
                        </div>
                    </Col>
                    <Col xs={12} lg={6} className={'p-sm-1 p-lg-5 bg-light d-flex align-content-center justify-content-center align-items-end'}>
                        <img src='\assets\team.svg' alt='Team icon' className={'img-fluid'}></img>
                    </Col>
                </Row>
            </Container >
        </Suspense>
    );
}