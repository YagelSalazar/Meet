import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loginUser } from '../../redux/authDuck';
import { HOME, REGISTER } from '../../routes/routes';

// styles
import { ButtonPrimary } from '../buttons';
import './index.scss';

function Login({ loginUser, isAuthenticated }) {
	const [formData, setFormData] = useState({
		email: '',
		password: '',
	});

	const { email, password } = formData;

	const onChange = (e) =>
		setFormData({ ...formData, [e.target.name]: e.target.value });

	const onSubmit = async (e) => {
		e.preventDefault();
		loginUser(email, password);
	};

	// Redirect if logged in
	if (isAuthenticated) {
		return <Redirect to={HOME} />;
	}

	return (
		<Fragment>
			<div className='container-auth'>
				<div className='auth-login'>
					<div className='auth-login__form'>
						<form onSubmit={(e) => onSubmit(e)} className='form'>
							<div className='u-mb-m'>
								<h2 className='heading-secondary'>Inicio de sesión</h2>
							</div>
							<div className='form__group'>
								<input
									type='email'
									placeholder='Correo'
									name='email'
									className='form__input'
									value={email}
									onChange={(e) => onChange(e)}
									// required
								/>
								<label htmlFor='name' className='form__label'>
									Correo
								</label>
							</div>
							<div className='form__group'>
								<input
									type='password'
									placeholder='Contraseña'
									value={password}
									onChange={(e) => onChange(e)}
									name='password'
									className='form__input'
								/>
								<label htmlFor='email' className='form__label'>
									Contraseña
								</label>
							</div>
							<div className='form__group'>
								<ButtonPrimary type='submit' design='primary' value='Ingresar' />
							</div>
							<div className='form__group'>
								<span className='register'>
									¿No tienes una cuenta?{' '}
									<Link to={REGISTER} className='register__inline'>
										Registrate
									</Link>
								</span>
							</div>
						</form>
					</div>
				</div>
			</div>
		</Fragment>
	);
}

Login.propTypes = {
	loginUser: PropTypes.func.isRequired,
	isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
	isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { loginUser })(Login);
