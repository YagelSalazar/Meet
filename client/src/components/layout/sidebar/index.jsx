import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Routes
import { HOME, PROFILE, CHAT, COMMUNITY, PROXY } from '../../../routes/routes';

// Redux
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../../redux/authDuck';

// Styles
import Icon from '../../icon';
import './index.scss';

function Sidebar({ logout }) {
	const [linkActive, setLinkActive] = useState({
		home: false,
		profile: false,
		chat: false,
		community: false,
		exit: false,
	});

	useEffect(() => {
		activeLink('home');
	}, []);

	const { home, profile, chat, community, exit } = linkActive;

	const activeLink = () => {
		const currentUrl = window.location.href;
		switch (currentUrl) {
			case `${PROXY}${HOME}`:
				setLinkActive({ home: true });
				break;
			case `${PROXY}${COMMUNITY}`:
				setLinkActive({ community: true });
				break;
			case `${PROXY}${PROFILE}`:
				setLinkActive({ profile: true });
				break;
			case `${PROXY}${CHAT}`:
				setLinkActive({ chat: true });
				break;
			default:
				setLinkActive({ home: true });
				break;
		}
	};

	return (
		<Fragment>
			<nav className='sidebar'>
				<ul className='side-nav'>
					<li
						className={`home side-nav__item ${home ? 'side-nav__item--active' : ''}`}
						onClick={() => activeLink('home')}
					>
						<Link to={HOME} className='side-nav__link'>
							<Icon icon='home' className='side-nav__icon' />
							<span>Inicio</span>
						</Link>
					</li>
					<li
						className={`home side-nav__item ${
							community ? 'side-nav__item--active' : ''
						}`}
						onClick={() => activeLink('community')}
					>
						<Link to={COMMUNITY} className='side-nav__link'>
							<Icon icon='heart' className='side-nav__icon' />
							<span>Comunidad</span>
						</Link>
					</li>
					<li
						className={`home side-nav__item ${
							profile ? 'side-nav__item--active' : ''
						}`}
						onClick={() => activeLink('profile')}
					>
						<Link to={PROFILE} className='side-nav__link'>
							<Icon icon='user' className='side-nav__icon' />
							<span>Perfil</span>
						</Link>
					</li>
					<li
						className={`home side-nav__item ${chat ? 'side-nav__item--active' : ''}`}
						onClick={() => activeLink('chat')}
					>
						<Link to={CHAT} className='side-nav__link'>
							<Icon icon='chat' className='side-nav__icon' />
							<span>Chat</span>
						</Link>
					</li>

					<li
						className={`home side-nav__item ${exit ? 'side-nav__item--active' : ''}`}
						onClick={() => activeLink('exit')}
					>
						<Link to='' onClick={logout} className='side-nav__link'>
							<Icon icon='log-out' className='side-nav__icon' />
							<span>Salir</span>
						</Link>
					</li>
				</ul>
				<div className='legal'>
					&copy; 2020 by Diego Salas. All rights reserved.
				</div>
			</nav>
		</Fragment>
	);
}

Sidebar.propTypes = {
	logout: PropTypes.func.isRequired,
};

export default connect(null, { logout })(Sidebar);
