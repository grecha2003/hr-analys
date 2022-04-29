import React from 'react';
import { Button } from 'react-bootstrap';

const MyButton = (props) => {
	return (
		<Button
			onClick={props.listener}
			id='Button'
			type='button'
			variant='primary'
			size='lg'
			style={{ marginTop: '32px', width: '300px', height: '78.18px' }}>
			{props.text}
		</Button>
	);
};

export default MyButton;
