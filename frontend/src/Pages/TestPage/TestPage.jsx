import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import logo from '../Assets/logo.png';
import qText from './QUEST';

import './TestPage.css';

class TestPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: 0,
      title1: '1. Меня удовлетворит только очень высокий уровень жизни',
      title2: '2. Я хочу иметь значительное влияние на окружающих',
    };

    this.add = this.add.bind(this);
  }

  add() {
    let qIndex = 0;
    if (this.state.list !== 36) {
      this.setState(() => ({
        list: this.state.list + 1,
        title1: (this.state.title1 = qText[2 * qIndex]),
      }));
      console.log('+');
    } else {
      document.getElementById('testsButton').disabled = true;
      console.log('-');
    }
    console.log(this.add);
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
              <p className="pnumber" style={{ color: '#fff' }}>
                {this.state.list}/36
              </p>
              <div className="quests__block">
                <h1 id="quest1">{this.state.title1}</h1>
                <h1 id="quest2">awd</h1>
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
                <Button
                  onClick={this.add}
                  id="testsButton"
                  type="button"
                  variant="primary"
                  size="lg"
                >
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
