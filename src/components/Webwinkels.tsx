// react component with 2 elements - left side: white square with centered text, right side: square with background image

import React, { Suspense } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './../App.css';
import { Warning } from './Warning';
import { Loader } from './Loader';
import { Link } from 'react-router-dom'
import { ScrollToNavigate } from './Scroll';

const typed = ['Gepassioneerd Software Developer',
    'Communicatief en teamgericht',
    'Creatief en gedetailleerd',
    'Samen met jou opzoek naar nieuwe oplossingen']

export const Webwinkels = () => {
    return (
        <Suspense fallback={<Loader color={'blue'} size={100} />}>
            <Container fluid className='background'>
            <ScrollToNavigate />
                <Row className={'p-sm-1 p-lg-5'}>
                    <Col xs={12} lg={6} className={'bg-white p-2 d-md-none min350'}>
                        <div className='wrapper'>
                            <img src='\assets\webwinkel.jpg' alt='Webwinkel icoon' className={'img-fluid absoluteMiddle'}></img>
                        </div>
                    </Col>
                    <Col xs={12} lg={6} className={'p-sm-1 p-lg-5 bg-light'}>
                        <div className={'my-5'}>
                            <h1 className={'display-2 naam'}>Webwinkels</h1>
                            <ul className='display-6 my-5'>
                                <li>+ natureldeluxe.be</li>
                                <li>+ eltomi.be</li>
                                <li>+ dekruidenmolen.be</li>
                                <li>+ ...</li>

                            </ul>
                        </div>
                        <div className={'my-5'}>
                            <p className='display-6 naam'>
                                <Link to="https://www.luondo.nl/" rel='noopener noreferrer' target='_blank'>Luondo</Link>,
                                <Link to="https://about.magento.com/Magento-Commerce.html" rel='noopener noreferrer' target='_blank'> Magento</Link>,
                                <Link to="https://www.prestashop.com/nl" rel='noopener noreferrer' target='_blank'> Prestashop</Link>,
                                <Link to="https://woocommerce.com/" rel='noopener noreferrer' target='_blank'> WooCommerce</Link>,
                                <Link to="https://www.opencart.com/" rel='noopener noreferrer' target='_blank'> OpenCart</Link> ...
                            </p>
                        </div>
                    </Col>
                    <Col xs={12} lg={6} className={'bg-white p-2 d-none d-md-block min350'}>
                        <div className='wrapper'>
                            <img src='\assets\webwinkel.jpg' alt='Webwinkel icoon' className={'img-fluid absoluteMiddle w75'}></img>
                        </div>
                    </Col>
                    <Warning />
                </Row>
            </Container>
        </Suspense>
    );
}