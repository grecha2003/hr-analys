import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MyButton from '../../UI_Components/MyButton/MyButton';

import logo from '../Assets/logo.png';
import FormPage from './Form/Form';
import qText from './QUEST';

import classes from './TestPage.module.css';

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

	add = (props) => {
		let qIndex = 0;
		if (this.state.list !== 36) {
			this.setState(() => ({
				list: this.state.list + 1,
				title1: (this.state.title1 = qText[2 * qIndex]),
			}));
			console.log(qText);
			console.log('+');
		} else {
			document.getElementById('testsButton').disabled = true;
			console.log('-');
		}
		console.log(this.add);
	};

	render() {
		return (
			<>
				<body>
					<div className='container'>
						<div className='logo'>
							<img src={logo} alt='logo' className='logo' />
						</div>
						<div className='block'>
							<p className={classes.pnumber} style={{ color: '#fff' }}>
								{this.state.list}/36
							</p>
							<div className={classes.quests__block}>
								<h1 id='quest1'>{this.state.title1}</h1>
								<h1 id='quest2'>awd</h1>
								<p>Выберите один вариант ответа:</p>
								<FormPage />
							</div>
							<div className={classes.qButton}>
								<MyButton text='Следующий вопрос' listener={this.add} />
							</div>
						</div>
					</div>
				</body>
			</>
		);
	}
}

export default TestPage;
