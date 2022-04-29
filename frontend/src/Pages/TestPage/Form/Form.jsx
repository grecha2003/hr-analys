import React from 'react';
import classes from './Form.module.css';
import { Form } from 'react-bootstrap';

const FormPage = () => {
	return (
		<Form>
			{['radio'].map((type) => (
				<div key={`default-${type}`} className={classes.mb3}>
					<Form.Check
						className={classes.radio__check}
						type={type}
						id={`default-${type}`}
						label={`Только первое`}
					/>

					<Form.Check
						className={classes.radio__check}
						type={type}
						label={`Скорее первое, чем второе`}
						id={`default-${type}`}
					/>

					<Form.Check
						className={classes.radio__check}
						type={type}
						label={`Скорее второе, чем первое`}
						id={`default-${type}`}
					/>

					<Form.Check
						className={classes.radio__check}
						type={type}
						label={`Только второе`}
						id={`default-${type}`}
					/>
				</div>
			))}
		</Form>
	);
};

export default FormPage;
