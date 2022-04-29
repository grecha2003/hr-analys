import React from 'react';
import Form from 'react-bootstrap/Form';

const StartForm = () => {
	return (
		<div>
			<Form.Label htmlFor='inputPassword5'></Form.Label>
			<Form.Control
				id='inputPassword5'
				aria-describedby='passwordHelpBlock'
				placeholder='Введите ключ'
			/>
		</div>
	);
};

export default StartForm;
