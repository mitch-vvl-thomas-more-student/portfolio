import { Col } from "react-bootstrap"
import { ExclamationTriangleFill } from "react-bootstrap-icons"

export const Warning = () => {
    return (
        <Col xs={12} className={'bg-light'}>
            <p><ExclamationTriangleFill size={24}/> Deze projecten zijn niet langer actief, maar hebben bijgedragen aan waar ik nu sta</p>
        </Col>
    )
}