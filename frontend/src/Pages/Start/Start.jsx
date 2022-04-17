import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form'
import { Link } from 'react-router-dom';

import logo from '../Assets/logo.png'
import AdminLogo from '../Assets/AdminLogo.png'

import "./Start.css"


export default class Start extends Component {

  render() {

    return (
      <>
        <body>
          <div className="container">
            <div className="logo">
              <img src={logo} alt="logo" className="logo" />
              <a href="#/">
                <img
                  src={AdminLogo}
                  alt="AdminLogo"
                  className="admin__logo"
                />
              </a>
            </div>
            <div className="block">
              <div>
                <h2 className="block__text">Что мотивирует и вдохновляет вас на работе?</h2>
                <p className="block__content">При выборе сферы деятельности важно понимать, какие задачи вызывают у вас энтузиазм, а какие приносят мало удовольствия. Пройдите простой тест и проверьте вашу мотивацию. Какой ваш основной стимул к работе?</p>
                <p className="block__content--key">Введите ключ для прохождения теста:</p>
                <div className="block__input">
                  <Form.Label htmlFor="inputPassword5"></Form.Label>
                  <Form.Control
                    style={{ marginLeft: "25px" }}
                    id="inputPassword5"
                    aria-describedby="passwordHelpBlock"
                    placeholder='Введите ключ'
                  />
                  <Link to="/user">
                    <Button type="button" variant="primary" size="lg" style={{ marginTop: "32px", width: "300px", height: "78.18px" }}>
                      Далее
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </body>
      </>
    );
  }
}
