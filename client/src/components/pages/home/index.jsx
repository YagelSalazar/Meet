import React, { Fragment } from 'react';

// Styles
import './index.scss';

// harcoded
const add1 = require('../../../img/add-1.jpg');
const add2 = require('../../../img/add-2.jpeg');
const add3 = require('../../../img/add-3.jpg');
const userPhoto = require('../../../img/user.jpg');

const home = () => {
	return (
		<Fragment>
			<main className='home-view'>
				<div className='gallery'>
					<div className='gallery__title'>
						<a href='!#' className='gallery__title-text'>
							Anunciate por solo $10
						</a>
					</div>
					<figure className='gallery__item'>
						<a
							href='https://www.facebook.com/'
							target='_blank'
							rel='noopener noreferrer'
							className='gallery__link'
						>
							<img src={add1} alt='last news and adds' className='gallery__photo' />
						</a>
					</figure>
					<figure className='gallery__item'>
						<a
							href='https://www.facebook.com/'
							target='_blank'
							rel='noopener noreferrer'
							className='gallery__link'
						>
							<img src={add1} alt='last news and adds' className='gallery__photo' />
						</a>
					</figure>
					<figure className='gallery__item'>
						<a
							href='https://www.facebook.com/'
							target='_blank'
							rel='noopener noreferrer'
							className='gallery__link'
						>
							<img src={add1} alt='last news and adds' className='gallery__photo' />
						</a>
					</figure>
					<figure className='gallery__item'>
						<a
							href='https://www.facebook.com/'
							target='_blank'
							rel='noopener noreferrer'
						>
							<img src={add2} alt='last news and adds' className='gallery__photo' />
						</a>
					</figure>
					<figure className='gallery__item'>
						<a
							href='https://www.facebook.com/'
							target='_blank'
							rel='noopener noreferrer'
						>
							<img src={add3} alt='last news and adds' className='gallery__photo' />
						</a>
					</figure>
				</div>

				<div className='overview'>
					<h1 className='heading-tertiary'>Usuarios top</h1>
					<div className='recommend'>
						<div className='recommend__friends'>
							<img src={userPhoto} alt='friend 1' className='recommend__photo' />
							<img src={userPhoto} alt='friend 1' className='recommend__photo' />
							<img src={userPhoto} alt='friend 1' className='recommend__photo' />
							<img src={userPhoto} alt='friend 1' className='recommend__photo' />
							<img src={userPhoto} alt='friend 1' className='recommend__photo' />
							<img src={userPhoto} alt='friend 1' className='recommend__photo' />
							<img src={userPhoto} alt='friend 1' className='recommend__photo' />
							<img src={userPhoto} alt='friend 1' className='recommend__photo' />
							<img src={userPhoto} alt='friend 1' className='recommend__photo' />
							<img src={userPhoto} alt='friend 1' className='recommend__photo' />
						</div>
					</div>
				</div>

				<div className='home-detail'>
					<div className='home-info'>
						<div className='home-info__heading'>
							<img src={userPhoto} alt='my avatar' className='home-info__photo' />
						</div>
						<h2 className='heading-secondary'>¡Bienvenido!</h2>
						<p className='paragraph'>
							Meet es la plataforma web para comunicar asusntos interesantes, ofrecer
							servicios entre la comunidad estudiantil, conocer a otros y las
							habilidades en las que destaca, publicar eventos y muchas cosas más.
						</p>
						<p className='paragraph'>
							Si realizas trabajos, vendes alimentos o algún tipo de artículo, tienes
							pensado realizar un evento compartelo para que otros puedan contactarte,
							por otro lado también puedes buscar algún producto o servicio que alguien
							más ofrezca.
						</p>
					</div>

					<div className='home-news'>
						<figure className='home-news__item'>
							<h2 className='heading-secondary'>Versión 1.0.0</h2>
							<p className='paragraph'>
								Actualmete meet se encuentra en su versión beta 1.0.0, si en algún
								momento llegas a encontrar algún bug o inestabilidad tanto en
								performance como en diseño, por favor, hazlo saber enviando un email a{' '}
								<a href='mailto:spprtmeet@gmail.com' className='paragraph-link'>
									spprtmeet@gmail.com
								</a>
								.
							</p>
						</figure>
						<figure className='home-news__item'>
							<h2 className='heading-secondary'>Contribuye</h2>
							<p className='paragraph'>
								Meet es el comienzo de un proyecto con mejoras en camino, si tienes
								conocimientos en programación, marketing, diseño, etc. y quieres ser
								parte del team, o solo proponer alguna función, envía un email a{' '}
								<a href='mailto:spprtmeet@gmail.com' className='paragraph-link'>
									spprtmeet@gmail.com
								</a>
								.
							</p>
						</figure>
					</div>
				</div>
			</main>
		</Fragment>
	);
};

export default home;
