import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { registerUser } from '../../redux/authDuck';
import PropTypes from 'prop-types';
import { HOME, ROOT } from '../../routes/routes';
// toast
import { toastr } from 'react-redux-toastr';
// styles
import { ButtonPrimary } from '../buttons';
import './index.scss';

function Register({ registerUser, isAuthenticated }) {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		password: '',
		password2: '',
	});

	const { name, email, password, password2 } = formData;
	// const { addToast } = useToasts();

	const onChange = (e) =>
		setFormData({ ...formData, [e.target.name]: e.target.value });

	const onSubmit = async (e) => {
		e.preventDefault();
		if (password !== password2) {
			toastr.error('Error', 'Las contraseñas no coinciden');
		} else {
			registerUser({
				name,
				email,
				password,
			});
		}
	};

	// Redirect if logged in
	if (isAuthenticated) {
		return <Redirect to={HOME} />;
	}

	return (
		<Fragment>
			<div className='container-auth'>
				<div className='auth-register'>
					<div className='auth-register__form'>
						<form onSubmit={(e) => onSubmit(e)} className='form'>
							<div className='u-mb-m'>
								<h2 className='heading-secondary'>Registro</h2>
							</div>
							<div className='form__group'>
								<input
									type='text'
									placeholder='Nombre completo'
									name='name'
									className='form__input'
									value={name}
									onChange={(e) => onChange(e)}
									required
								/>
								<label htmlFor='name' className='form__label'>
									Nombre completo
								</label>
							</div>
							<div className='form__group'>
								<input
									type='email'
									placeholder='Correo'
									name='email'
									className='form__input'
									value={email}
									onChange={(e) => onChange(e)}
									required
								/>
								<label htmlFor='email' className='form__label'>
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
									required
								/>
								<label htmlFor='password' className='form__label'>
									Contraseña
								</label>
							</div>
							<div className='form__group'>
								<input
									type='password'
									placeholder='Confirmar contraseña'
									value={password2}
									onChange={(e) => onChange(e)}
									name='password2'
									className='form__input'
									required
								/>
								<label htmlFor='password2' className='form__label'>
									Confirmar contraseña
								</label>
							</div>
							<div className='form__group'>
								<ButtonPrimary type='submit' design='primary' value='Registrarme' />
							</div>
							<div className='form__group'>
								<span className='register'>
									¿Ya tienes una cuenta?{' '}
									<Link to={ROOT} className='register__inline'>
										Inicia sesión
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

let mapStateToProps = (state) => ({
	isAuthenticated: state.auth.isAuthenticated,
});

Register.propTypes = {
	registerUser: PropTypes.func.isRequired,
	isAuthenticated: PropTypes.bool,
};

export default connect(mapStateToProps, { registerUser })(Register);
