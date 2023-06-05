// react component with 2 elements - left side: white square with centered text, right side: square with background image

import React, { Suspense } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './../App.css';
import { TypedText } from './TypedText';
import { Loader } from './Loader';
import { ScrollToNavigate } from './Scroll';

export const PersoonlijkeRealisaties = () => {
    return (
        <Suspense fallback={<Loader color={'blue'} size={100} />}>
            <Container fluid className='background'>
            <ScrollToNavigate />
                <Row className={'p-sm-1 p-lg-5 text-center min350'}>
                    <Col xs={12} className={'bg-light'}>
                        <div className={'wrapper'}>
                            <div className={'absoluteMiddle'}>
                                <h2 className={'display-2 naam'}><TypedText text={['Persoonlijke realisaties']} /></h2>
                                <p>(nog voor ik aan de studie begon)</p>
                            </div>

                        </div>
                    </Col>
                </Row>
            </Container>
        </Suspense>
    );
}