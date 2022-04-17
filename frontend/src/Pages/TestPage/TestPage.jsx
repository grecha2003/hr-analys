import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';

import logo from '../Assets/logo.png';

import "./TestPage.css"

class TestPage extends Component {
  state = {
    list: 0
  };

  add = () => {
    this.setState({ list: this.state.list + 1 });
  }

  render() {
    return (
      <>
        <body>
          <div className="container">
            <div className="logo">
              <img src={logo} alt="logo" className="logo" />
            </div>
            <div className="block">
              <div className='quests__block'>
                <p style={{ color: "#fff" }}>{this.state.list}/36</p>
                <h1 id="quest1">1. Меня удовлетворит только очень высокий уровень жизни.</h1>
                <h1 id="quest2">2. Я хочу иметь значительное влияние на окружающих.</h1>
                <p>Выберите один вариант ответа:</p>
              </div>
              <Form>
                {['radio'].map((type) => (
                  <div key={`default-${type}`} className="mb-3">
                    <Form.Check
                      className="radio__check"
                      type={type}
                      id={`default-${type}`}
                      label={`Только первое`}
                    />

                    <Form.Check
                      className="radio__check"
                      type={type}
                      label={`Скорее первое, чем второе`}
                      id={`default-${type}`}
                    />

                    <Form.Check
                      className="radio__check"
                      type={type}
                      label={`Скорее второе, чем первое`}
                      id={`default-${type}`}
                    />

                    <Form.Check
                      className="radio__check"
                      type={type}
                      label={`Только второе`}
                      id={`default-${type}`}
                    />
                  </div>
                ))}
                <Button onClick={this.add} type="button" variant="primary" size="lg">
                  Следующий вопрос
                </Button>
              </Form>
            </div>
          </div>
        </body>
      </>
    );
  }
}

export default TestPage;