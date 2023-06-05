// react component with 2 elements - left side: white square with centered text, right side: square with background image

import React, { Suspense } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './../App.css';
import { Loader } from './Loader';
import { ScrollToNavigate } from './Scroll';


export const Technologieen = () => {
    return (
        <Suspense fallback={<Loader color={'blue'} size={100} />}>
            <Container fluid className='background bottom-white' style={{ overflow: 'hidden' }}>
            <ScrollToNavigate />
                <Row className={'p-sm-1 p-lg-5'}>
                    <Row className='bg-light'>
                        <Col xs={10} lg={9} className={'p-sm-1 p-lg-5'}>
                            <h1 className={'display-2 naam'}>Talen en technologieën</h1>
                        </Col>
                        <Col xs={2} lg={3} className={'p-sm-1 p-lg-5'}>
                            <img src='\assets\csharp.png' alt='Csharp logo' className={'img-fluid'}></img>
                            <img src='\assets\react.png' alt='React logo' className={'img-fluid'}></img>
                        </Col>
                    </Row>
                    <Row className='bg-light'>
                        <Col xs={12} lg={6} xl={4}>
                            <ul>
                                <li>+ Microsoft 365</li>
                                <li>+ SharePoint Online</li>
                                <li>+ .NET</li>
                                <li>+ .NET Framework</li>
                                <li>+ .NET Core</li>
                                <li>+ Entity Framework 6</li>
                                <li>+ MVC</li>
                                <li>+ Webforms</li>
                                <li>+ Unitofworks</li>
                                <li>+ Generics</li>
                                <li>+ LINQ</li>
                            </ul>
                        </Col>
                        <Col xs={12} lg={6} xl={4}>
                            <ul>
                                <li>+ Azure Web Apps</li>
                                <li>+ Azure Functions</li>
                                <li>+ Azure SQL Database</li>
                                <li>+ OAuth2</li>
                                <li>+ OData</li>
                                <li>+ ADAL</li>
                                <li>+ MSAL</li>
                                <li>+ Microsoft Graph</li>
                                <li>+ Azure bot framework</li>
                                <li>+ Microsoft Teams development</li>
                                <li>+ PHP</li>
                            </ul>
                        </Col>
                        <Col xs={12} lg={6} xl={4}>
                            <ul>
                                <li>+ PowerShell</li>
                                <li>+ Javascript, (X)HTML, CSS, jQuery</li>
                                <li>+ Typescript</li>
                                <li>+ React</li>
                                <li>+ Ionic</li>
                                <li>+ Angular</li>
                                <li>+ PNPM, NPM, Node.js, Webpack</li>
                                <li>+ SPFx</li>
                                <li>+ XML, JSON</li>
                                <li>+ (My)SQL</li>
                                <li>+ Power Platform</li>
                            </ul>
                        </Col>
                    </Row>
                </Row>
            </Container>
        </Suspense>
    );
}