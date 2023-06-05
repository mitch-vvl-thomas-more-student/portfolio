import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Loader } from './Loader'
import { Suspense } from 'react'
import { RingLoader } from 'react-spinners'


export const NotFound = () => {
  return (
    <>
      <Suspense fallback={<Loader color={'blue'} size={100} />}>
        <Container fluid>
          <Row className={'notFound'}>
            <Col className={'notFoundText'}>
              <RingLoader
                color="#fff"
                size={150}
                speedMultiplier={0.7}
                className={'spinner'}
              />
              <h2 className="display-4">Oeps, deze pagina werd niet gevonden ... </h2>
              <p>
                Het is waarschijnlijk een goed idee om bij start te beginen!
                <Link to={'/'}>Naar start</Link>
              </p>
            </Col>
          </Row>
        </Container>
      </Suspense>
    </>
  )
}
