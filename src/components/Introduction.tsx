// react component with 2 elements - left side: white square with centered text, right side: square with background image

import React, { Suspense } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './../App.css';
import { TypedText } from './TypedText';
import { CloudArrowDown } from 'react-bootstrap-icons';
import { Loader } from './Loader';
import { ScrollToNavigate } from './Scroll';

const typed = ['Gepassioneerd Software Developer',
    'Communicatief en teamgericht',
    'Creatief en gedetailleerd',
    'Samen met jou opzoek naar nieuwe oplossingen']

export const Introduction = () => {

    const downloadCV = () => {
        const link = document.createElement('a');
        link.href = '/assets/CvMitchVanVlierberghe.pdf';
        link.download = 'CvMitchVanVlierberghe.pdf';
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.click();
      };


    return (
        <Suspense fallback={<Loader color={'blue'} size={100} />}>
            <Container fluid className='background'>
                <ScrollToNavigate />
                <Row className={'p-sm-1 p-lg-5'}>
                    <Col xs={12} lg={6} className={'profielfoto bg-light p-2 d-md-none'}>
                        <img src='\assets\mitchVanVlierberghe.jpg' alt='Mitch Van Vlierberghe profielfoto' className={'img-fluid'}></img>
                    </Col>
                    <Col xs={12} lg={6} className={'p-sm-1 p-lg-5 bg-light'}>
                        <div className={'my-5'}>
                            <h1 className={'display-2 naam'}>Mitch Van Vlierberghe</h1>
                            <h4 className={'display-5 titel'}><TypedText text={typed} /></h4>
                            <div className={'text-center my-5'}>
                                <Button variant="primary" onClick={downloadCV}><CloudArrowDown size={24} /> Download CV</Button>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} lg={6} className={'profielfoto bg-light p-2 d-none d-md-block'}>
                        <img src='\assets\mitchVanVlierberghe.jpg' alt='Mitch Van Vlierberghe profielfoto' className={'img-fluid'}></img>
                    </Col>
                </Row>
            </Container>
        </Suspense>
    );
}