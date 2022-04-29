import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';

const RegistrationForm = () => {
	return (
		<div>
			<Row
				className='text-center'
				style={{
					display: 'block',
					width: '48rem',
					margin: '135px 0px 0px 145px',
				}}>
				<Col style={{ marginBottom: '20px' }}>
					<Form.Label
						htmlFor='disabledSelect'
						style={{
							color: 'white',
							display: 'flex',
							fontFamily: 'Arial',
							fontWeight: '700',
							fontSize: '24px',
						}}>
						Имя
					</Form.Label>
					<Form.Control type='text' size='lg' placeholder='Введите свое имя' />
				</Col>
				<Col style={{ marginBottom: '20px' }}>
					<Form.Label
						htmlFor='disabledSelect'
						style={{
							color: 'white',
							display: 'flex',
							fontFamily: 'Arial',
							fontWeight: '700',
							fontSize: '24px',
						}}>
						Фамилия
					</Form.Label>
					<Form.Control
						type='text'
						size='lg'
						placeholder='Введите свою фамилию'
					/>
				</Col>
				<Form.Group
					style={{ marginBottom: '20px' }}
					as={Col}
					controlId='formGridEmail'>
					<Form.Label
						style={{
							color: 'white',
							display: 'flex',
							fontFamily: 'Arial',
							fontWeight: '700',
							fontSize: '24px',
						}}>
						Email
					</Form.Label>
					<Form.Control
						type='email'
						size='lg'
						placeholder='Введите свой email'
					/>
				</Form.Group>
			</Row>
		</div>
	);
};

export default RegistrationForm;
