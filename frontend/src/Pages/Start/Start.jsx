import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../Assets/logo.png';
import AdminLogo from '../Assets/AdminLogo.png';
import classes from './Start.module.css';
import StartForm from './Component/StartForm/StartForm';
import MyButton from '../../UI_Components/MyButton/MyButton';

const Start = () => {
	return (
		<div className='container'>
			<header className='logo'>
				<img src={logo} alt='logo' className='logo' />
				<div className={classes.admin__logo}>
					<a href='#/'>
						<img
							src={AdminLogo}
							alt='AdminLogo'
							className={classes.admin__logo}
						/>
					</a>
				</div>
			</header>
			<main className='block'>
				<div>
					<h2 className={classes.block__text}>
						Что мотивирует и вдохновляет вас на работе?
					</h2>
					<p className={classes.block__content}>
						При выборе сферы деятельности важно понимать, какие задачи вызывают
						у вас энтузиазм, а какие приносят мало удовольствия. Пройдите
						простой тест и проверьте вашу мотивацию. Какой ваш основной стимул к
						работе?
					</p>
					<p className={classes.block__ktext}>
						Введите ключ для прохождения теста:
					</p>
					<div className={classes.block__input}>
						<StartForm />
						<Link to='/user'>
							<MyButton text='Далее' />
						</Link>
					</div>
				</div>
			</main>
		</div>
	);
};
export default Start;
