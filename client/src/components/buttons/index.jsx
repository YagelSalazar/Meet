import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import './index.scss';

export const LinkSlide = ({
	route = '#',
	textShow = 'aceptar',
	textHide = 'aceptar',
	color = null,
}) => {
	return (
		<Fragment>
			<Link to={route} className={`btn-slide ${color !== null ? color : ''}`}>
				<span className='btn-slide__visible'>{textShow}</span>
				<span className='btn-slide__invisible'>{textHide}</span>
			</Link>
		</Fragment>
	);
};

export const ButtonSlide = ({
	type = 'button',
	textShow = 'aceptar',
	textHide = 'aceptar',
	color = null,
}) => {
	return (
		<Fragment>
			<button type={type} className={`btn-slide ${color !== null ? color : ''}`}>
				<span className='btn-slide__visible'>{textShow}</span>
				<span className='btn-slide__invisible'>{textHide}</span>
			</button>
		</Fragment>
	);
};

export const LinkInline = ({ route = '/', value, trick = null }) => {
	return (
		<Fragment>
			<Link to={route} className='btn-inline'>
				{value}
				{trick !== null ? <span>{trick}</span> : ``}
			</Link>
		</Fragment>
	);
};

export const ButtonPrimary = ({ value, type, design }) => {
	return (
		<Fragment>
			<button type={type} className={`btn btn--${design}`}>
				{value}
			</button>
		</Fragment>
	);
};
