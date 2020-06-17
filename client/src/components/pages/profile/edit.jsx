import React, { Fragment, useState } from 'react';

// Style
import { LinkSlide, ButtonSlide } from '../../buttons';
import './index.scss';
const userPhoto = require('../../../img/user.jpg');

const Settings = () => {
	const [personalData, setPersonalData] = useState({
		name: '',
		email: '',
		bio: '',
		school: '',
		carrer: '',
		facebook: '',
		instagram: '',
		whatsapp: '',
		twitter: '',
	});

	const {
		name,
		email,
		bio,
		school,
		carrer,
		facebook,
		instagram,
		whatsapp,
		twitter,
	} = personalData;

	const changePersonalDataForm = (e) => {
		setPersonalData({ ...personalData, [e.target.name]: e.target.value });
	};

	return (
		<Fragment>
			<main className='profile-view'>
				<div className='profile-detail'>
					<div className='profile-info'>
						<div className='profile-info__edit'>
							<div className='profile-info__heading'>
								<img src={userPhoto} alt='my avatar' className='profile-info__photo' />
								<span className='profile-info__name'>Juan Diego Salas Jimenez</span>
							</div>
							<form className='form-dashboard u-mt-s'>
								<div className='form-group'>
									<h2 className='heading-tertiary u-mb-s'>Mi información</h2>
								</div>
								<div className='form-group'>
									<input
										type='text'
										placeholder='Nombre completo'
										name='name'
										className='form-group__input'
										value={name}
										onChange={(e) => changePersonalDataForm(e)}
										required
									/>
									<label htmlFor='fullName' className='form-group__label'>
										Nombre
									</label>
								</div>
								<div className='form-group'>
									<input
										type='email'
										placeholder='Correo'
										name='email'
										className='form-group__input'
										value={email}
										onChange={(e) => changePersonalDataForm(e)}
										required
									/>
									<label htmlFor='email' className='form-group__label'>
										Correo
									</label>
								</div>
								<div className='form-group'>
									<input
										type='text'
										placeholder='Bio'
										name='bio'
										className='form-group__input'
										value={bio}
										onChange={(e) => changePersonalDataForm(e)}
										required
									/>
									<label htmlFor='bio' className='form-group__label'>
										Bio
									</label>
								</div>
								<div className='form-group'>
									<input
										type='text'
										placeholder='School'
										name='school'
										className='form-group__input'
										value={school}
										onChange={(e) => changePersonalDataForm(e)}
										required
									/>
									<label htmlFor='bio' className='form-group__label'>
										School
									</label>
								</div>
								<div className='form-group'>
									<input
										type='text'
										placeholder='Carrera'
										name='carrer'
										className='form-group__input'
										value={carrer}
										onChange={(e) => changePersonalDataForm(e)}
										required
									/>
									<label htmlFor='bio' className='form-group__label'>
										Carrera
									</label>
								</div>
								<div className='form-group'>
									<h2 className='heading-tertiary u-mb-s'>Social</h2>
								</div>
								<div className='form-group'>
									<input
										type='text'
										placeholder='Facebook'
										name='facebook'
										className='form-group__input'
										value={facebook}
										onChange={(e) => changePersonalDataForm(e)}
										required
									/>
									<label htmlFor='facebook' className='form-group__label'>
										Facebook
									</label>
								</div>
								<div className='form-group'>
									<input
										type='text'
										placeholder='Instagram'
										name='instagram'
										className='form-group__input'
										value={instagram}
										onChange={(e) => changePersonalDataForm(e)}
										required
									/>
									<label htmlFor='instagram' className='form-group__label'>
										Instagram
									</label>
								</div>

								<div className='form-group'>
									<input
										type='text'
										placeholder='Whatsapp'
										name='whatsapp'
										className='form-group__input'
										value={whatsapp}
										onChange={(e) => changePersonalDataForm(e)}
										required
									/>
									<label htmlFor='whatsapp' className='form-group__label'>
										Whatsapp
									</label>
								</div>
								<div className='form-group'>
									<input
										type='text'
										placeholder='Twitter'
										name='twitter'
										className='form-group__input'
										value={twitter}
										onChange={(e) => changePersonalDataForm(e)}
										required
									/>
									<label htmlFor='twitter' className='form-group__label'>
										Twitter
									</label>
								</div>

								<ButtonSlide
									type={'submit'}
									textHide='Guardar cambios'
									textShow='Mi perfil'
								/>
							</form>
						</div>
					</div>

					<div className='profile-upgrade'>
						<figure className='post'>
							<form className='form-dashboard'>
								<div className='form-group'>
									<h2 className='heading-tertiary u-mb-s'>Agregar un servicio</h2>
								</div>
								<div className='form-group'>
									<input
										type='text'
										placeholder='Titulo'
										value=''
										// onChange={(e) => onChange(e)}
										name='serviceTitle'
										className='form-group__input'
									/>
									<label htmlFor='serviceTitle' className='form-group__label'>
										Titulo
									</label>
								</div>
								<div className='form-group'>
									<input
										type='text'
										placeholder='Descripción'
										value=''
										// onChange={(e) => onChange(e)}
										name='serviceDescription'
										className='form-group__input'
									/>
									<label htmlFor='serviceDescription' className='form-group__label'>
										Descripción
									</label>
								</div>
								<div className='form-group'>
									<input
										type='number'
										placeholder='Precio'
										value=''
										// onChange={(e) => onChange(e)}
										name='servicePrice'
										className='form-group__input'
									/>
									<label htmlFor='servicePrice' className='form-group__label'>
										Precio
									</label>
								</div>
								<LinkSlide textHide='Guardar servicio' textShow='Nuevo servicio' />
							</form>
						</figure>
						<figure className='post'>
							<form className='form-dashboard'>
								<div className='form-group'>
									<h2 className='heading-tertiary u-mb-s'>Actualizar contraseña</h2>
								</div>
								<div className='form-group'>
									<input
										type='password'
										placeholder='Contraseña actual'
										value='asdasdasdas'
										// onChange={(e) => onChange(e)}
										name='currentPassword'
										className='form-group__input'
									/>
									<label htmlFor='currentPassword' className='form-group__label'>
										Contraseña actual
									</label>
								</div>
								<div className='form-group'>
									<input
										type='password'
										placeholder='Nueva contraseña'
										value=''
										// onChange={(e) => onChange(e)}
										name='newPassword'
										className='form-group__input'
									/>
									<label htmlFor='newPassword' className='form-group__label'>
										Nueva contraseña
									</label>
								</div>
								<LinkSlide textHide='Actualziar contraseña' textShow='Contraseña' />
							</form>
						</figure>
						<form action='' className='form-dashboard'>
							<LinkSlide
								textShow='Eliminar cuenta'
								textHide='Confirmar'
								color='danger'
							/>
						</form>
					</div>
				</div>
			</main>
		</Fragment>
	);
};

export default Settings;
