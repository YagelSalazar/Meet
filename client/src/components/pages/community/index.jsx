import React, { Fragment } from 'react';

// Styles
import './index.scss';
import Icon from '../../icon';

// harcoded
const add1 = require('../../../img/add-1.jpg');
const add2 = require('../../../img/add-2.jpeg');
const add3 = require('../../../img/add-3.jpg');
const userPhoto = require('../../../img/user.jpg');

const home = () => {
	return (
		<Fragment>
			<main className='community-view'>
				<div className='community-detail'>
					<div className='community-detail__post'>
						<div className='community-form'>
							<div className='form-group'>
								<h2 className='heading-tertiary'>Crear publicación</h2>
							</div>
							<form>
								<div className='post-content'>
									<figcaption>
										<img src={userPhoto} alt='User' />
									</figcaption>
									<textarea
										name=''
										id='newPost'
										placeholder='¿En que estas pensando?'
									></textarea>
								</div>
								<button className='btn btn--primary'>Publciar</button>
							</form>
						</div>
						<div className='community-posts'>
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

					<div className='gallery-side'>
						<div className='gallery-side__title'>
							<a href='!#' className='gallery-side__title-text'>
								Anunciate por solo $10
							</a>
						</div>
						<figure className='gallery-side__item'>
							<a
								href='https://www.facebook.com/'
								target='_blank'
								rel='noopener noreferrer'
								className='gallery-side__link'
							>
								<img
									src={add1}
									alt='last news and adds'
									className='gallery-side__photo'
								/>
							</a>
						</figure>
						<figure className='gallery-side__item'>
							<a
								href='https://www.facebook.com/'
								target='_blank'
								rel='noopener noreferrer'
								className='gallery-side__link'
							>
								<img
									src={add1}
									alt='last news and adds'
									className='gallery-side__photo'
								/>
							</a>
						</figure>
						<figure className='gallery-side__item'>
							<a
								href='https://www.facebook.com/'
								target='_blank'
								rel='noopener noreferrer'
								className='gallery-side__link'
							>
								<img
									src={add2}
									alt='last news and adds'
									className='gallery-side__photo'
								/>
							</a>
						</figure>
						<figure className='gallery-side__item'>
							<a
								href='https://www.facebook.com/'
								target='_blank'
								rel='noopener noreferrer'
								className='gallery-side__link'
							>
								<img
									src={add3}
									alt='last news and adds'
									className='gallery-side__photo'
								/>
							</a>
						</figure>
					</div>
				</div>
			</main>
		</Fragment>
	);
};

export default home;
