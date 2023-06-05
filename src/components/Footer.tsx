import { Suspense } from "react"
import { Col, Container, Row } from "react-bootstrap"
import { Loader } from "./Loader"
import { Link } from "react-router-dom"

export const Footer = () => {
    return (
        <Suspense fallback={<Loader color={'blue'} size={100} />}>
            <Container fluid>
                <Container className="topBorder py-5 px-2">
                    <Row>
                        <Col xs={12} lg={4}>
                            <h3>Over mij</h3>
                            <Link to="/">Dit ben ik</Link><br />
                            <Link to="/algemeen">Algemeen</Link><br />
                            <Link to="/persoonlijke-troeven">Persoonlijke Troeven</Link><br />
                            <Link to="/professional-socials">Socials</Link><br />
                            <Link to="/webwinkels">Webwinkels</Link><br />

                        </Col>
                        <Col xs={12} lg={4}>
                            <h3>Opleiding</h3>
                            <Link to="/schoolprojecten">Schoolprojecten</Link><br />
                            <Link to="/persoonlijke-realisaties">Persoonlijke Realisaties</Link><br />
                            <Link to="/php">PHP</Link><br />

                        </Col>
                        <Col xs={12} lg={4}>
                            <h3>Nu belangrijk</h3>
                            <Link to="/opleiding">Opleiding</Link><br />
                            <Link to="/technologieen">Technologieën</Link><br />
                            <Link to="/microsoft-certified">Microsoft Certified</Link><br />
                        </Col>
                    </Row>
                </Container>
            </Container>
        </Suspense>
    )

}
