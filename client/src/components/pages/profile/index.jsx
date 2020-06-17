import React, { Fragment } from 'react';
import Icon from '../../icon';
import { LinkSlide } from '../../buttons';

// Routes
import { PROFILE_EDIT } from '../../../routes/routes';

// Style
import './index.scss';
const userPhoto = require('../../../img/user.jpg');

const Profile = () => {
	return (
		<Fragment>
			<main className='profile-view'>
				<div className='profile-detail'>
					<div className='profile-info'>
						<div className='profile-info__heading'>
							<img src={userPhoto} alt='my avatar' className='profile-info__photo' />
							<span className='profile-info__name'>Juan Diego Salas Jimenez</span>
						</div>
						<p className='bio'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor odit
							temporibus cupiditate molestias ratione quo ipsa beatae quae! Dolorum
							facere optio minus!
						</p>
						<h2 className='heading-tertiary'>Social</h2>
						<ul className='list'>
							<li className='list__item'>
								<Icon icon='email' className='list__item-icon' />
								dsalas035@gmail.com
							</li>
							<li className='list__item'>
								<Icon icon='facebook' className='list__item-icon' />
								Diego salas oc
							</li>
							<li className='list__item'>
								<Icon icon='instagram' className='list__item-icon' />
								Soy_diegosj
							</li>
							<li className='list__item'>
								<Icon icon='phone' className='list__item-icon' />
								7714152997
							</li>
							<li className='list__item'>
								<Icon icon='twitter' className='list__item-icon' />
								soy_diego_sj
							</li>
							<li className='list__item'>
								<Icon icon='cake' className='list__item-icon' />
								9/12/1998
							</li>
						</ul>
						<h2 className='heading-tertiary'>Servicios y skills</h2>
						<ul className='services'>
							{/* <li className='services__item'>
								<Icon icon='pin' className='services__item-icon' />
								<div className='services__item-description'>
									<span className='services__item-title'>Desarrollo web</span>
									Envia mensaje para mas inromación
								</div>
								<span className='services__item-extra'>eliminar</span>
							</li>
							<li className='services__item'>
								<Icon icon='pin' className='services__item-icon' />
								<div className='services__item-description'>
									<span className='services__item-title'>Desarrollo web</span>
									Envia mensaje para mas inromación
								</div>
								<span className='services__item-extra'>eliminar</span>
							</li>
							<li className='services__item'>
								<Icon icon='pin' className='services__item-icon' />
								<div className='services__item-description'>
									<span className='services__item-title'>Desarrollo web</span>
									Envia mensaje para mas Lorem ipsum dolor sitedit aspernatur
									perspiciatis aperiam reprehenderit voluptatem ad accusamus!
								</div>
								<span className='services__item-extra'>eliminar</span>
							</li> */}
						</ul>
						<LinkSlide route={PROFILE_EDIT} textShow='Mi perfil' textHide='Editar' />
					</div>

					<div className='profile-util'>
						<figure className='post'>
							<figcaption className='post__user'>
								<img src={userPhoto} alt='User' className='post__photo' />
								<div className='post__user-box'>
									<p className='post__user-name'>Diego Salas</p>
									<p className='post__user-date'>Jan 8th, 2019</p>
								</div>
								<button className='post__option'>
									<Icon icon='trash' className='post__option-icon' />
								</button>
							</figcaption>
							<blockquote className='post__text'>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, illum?
								Ullam animi deleniti digni!
							</blockquote>
							<div className='post__actions'>
								<button className='post__actions-btn'>
									<Icon icon='thumbs-up' className='post__actions-icon' />
								</button>
								<button className='post__actions-btn'>
									<Icon icon='thumbs-down' className='post__actions-icon' />
								</button>
								<button className='post__actions-btn'>
									<Icon icon='message' className='post__actions-icon' />
								</button>
							</div>
						</figure>
						<figure className='post'>
							<figcaption className='post__user'>
								<img src={userPhoto} alt='User' className='post__photo' />
								<div className='post__user-box'>
									<p className='post__user-name'>Diego Salas</p>
									<p className='post__user-date'>Jan 8th, 2019</p>
								</div>
								<button className='post__option'>
									<Icon icon='trash' className='post__option-icon' />
								</button>
							</figcaption>
							<blockquote className='post__text'>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, illum?
								Ullam animi deleniti digni!
							</blockquote>
							<div className='post__actions'>
								<button className='post__actions-btn'>
									<Icon icon='thumbs-up' className='post__actions-icon' />
								</button>
								<button className='post__actions-btn'>
									<Icon icon='thumbs-down' className='post__actions-icon' />
								</button>
								<button className='post__actions-btn'>
									<Icon icon='message' className='post__actions-icon' />
								</button>
							</div>
						</figure>
						<figure className='post'>
							<figcaption className='post__user'>
								<img src={userPhoto} alt='User' className='post__photo' />
								<div className='post__user-box'>
									<p className='post__user-name'>Diego Salas</p>
									<p className='post__user-date'>Jan 8th, 2019</p>
								</div>
								<button className='post__option'>
									<Icon icon='trash' className='post__option-icon' />
								</button>
							</figcaption>
							<blockquote className='post__text'>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, illum?
								Ullam animi deleniti digni!
							</blockquote>
							<div className='post__actions'>
								<button className='post__actions-btn'>
									<Icon icon='thumbs-up' className='post__actions-icon' />
								</button>
								<button className='post__actions-btn'>
									<Icon icon='thumbs-down' className='post__actions-icon' />
								</button>
								<button className='post__actions-btn'>
									<Icon icon='message' className='post__actions-icon' />
								</button>
							</div>
						</figure>
						<figure className='post'>
							<figcaption className='post__user'>
								<img src={userPhoto} alt='User' className='post__photo' />
								<div className='post__user-box'>
									<p className='post__user-name'>Diego Salas</p>
									<p className='post__user-date'>Jan 8th, 2019</p>
								</div>
								<button className='post__option'>
									<Icon icon='trash' className='post__option-icon' />
								</button>
							</figcaption>
							<blockquote className='post__text'>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, illum?
								Ullam animi deleniti digni!
							</blockquote>
							<div className='post__actions'>
								<button className='post__actions-btn'>
									<Icon icon='thumbs-up' className='post__actions-icon' />
								</button>
								<button className='post__actions-btn'>
									<Icon icon='thumbs-down' className='post__actions-icon' />
								</button>
								<button className='post__actions-btn'>
									<Icon icon='message' className='post__actions-icon' />
								</button>
							</div>
						</figure>
					</div>
				</div>
			</main>
		</Fragment>
	);
};

export default Profile;
