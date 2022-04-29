import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../Assets/logo.png';
import classes from './Registration.module.css';
import RegistrationForm from './Component/RegistrationForm/RegistrationForm';
import MyButton from '../../UI_Components/MyButton/MyButton';

class Registration extends Component {
	render() {
		return (
			<>
				<body>
					<div className='container'>
						<div className='logo'>
							<img src={logo} alt='logo' className='logo' />
						</div>
						<div className='block'>
							<Container>
								<RegistrationForm />
								<div className={classes.reg__button}>
									<Link to='/tests'>
										<MyButton text='Приступить к тесту' />
									</Link>
								</div>
							</Container>
						</div>
					</div>
				</body>
			</>
		);
	}
}

export default Registration;
