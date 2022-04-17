import React, { Component } from 'react';
import { Form, Row, Col, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';


import logo from '../Assets/logo.png'
import './Registration.css'

class Registration extends Component {
  render() {
    return (
      <>
        <body>
          <div className="container">
            <div className="logo">
              <img src={logo} alt="logo" className="logo" />
            </div>
            <div className="block">
              <Container>
                <Row className='text-center' style={{ display: "block", width: "48rem", margin: "135px 0px 0px 145px" }}>
                  <Col style={{ marginBottom: '20px' }}>
                    <Form.Label htmlFor="disabledSelect" style={{
                      color: "white", display: "flex", fontFamily: 'Arial', fontWeight: "700", fontSize: "24px"
                    }}>Имя</Form.Label>
                    <Form.Control type="text" size="lg" />
                  </Col>
                  <Col style={{ marginBottom: '20px' }}>
                    <Form.Label htmlFor="disabledSelect" style={{ color: "white", display: "flex", fontFamily: 'Arial', fontWeight: "700", fontSize: "24px" }}>Фамилия</Form.Label>
                    <Form.Control type="text" size="lg" />
                  </Col>
                  <Form.Group style={{ marginBottom: '20px' }} as={Col} controlId="formGridEmail">
                    <Form.Label style={{ color: "white", display: "flex", fontFamily: 'Arial', fontWeight: "700", fontSize: "24px" }}>Email</Form.Label>
                    <Form.Control type="email" size="lg" />
                  </Form.Group>
                </Row>
                <Link to="/tests">
                  <Button variant="primary" size="lg" style={{ margin: "195px 0px 0px 390px", width: "300px", height: "78.18px" }}>
                    Приступить к тесту
                  </Button>
                </Link>
              </Container>
            </div>
          </div>
        </body>
      </>
    );
  }
}

export default Registration;