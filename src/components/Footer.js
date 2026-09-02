import React from 'react'
import MenuFooter from './MenuFooter'
import {Col, Row} from 'react-bootstrap';

export default function Footer() {
  return (
    <Row>
        <Col xs={6} className="text-center border mt-2"><MenuFooter/></Col>
        <Col xs={6} className="text-center border mt-2"><h1>Autre truc</h1></Col>
    </Row>
  )
}
