import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Routes
import { PROFILE } from '../../../routes/routes';

// Redux
import { logout } from '../../../redux/authDuck';
import { getCurrentProfile } from '../../../redux/profileDuck';

// Styles
import Icon from '../../icon';
import './index.scss';

// Harcoded
const userPhoto = require('../../../img/user.jpg');
const logo = require('../../../img/logo.png');

const Header = ({
	getCurrentProfile,
	auth: { user },
	profile: { profile, loading },
	logout,
}) => {
	useEffect(() => {
		getCurrentProfile();
	}, []);

	return (
		<Fragment>
			<header className='header'>
				<img src={logo} alt='mit logo' className='logo' />

				<form action='#' className='search'>
					<input
						type='text'
						className='search__input'
						placeholder='Search something'
					/>
					<button className='search__button'>
						<Icon icon='magnifying-glass' className='search__icon' />
					</button>
				</form>

				<nav className='user-nav'>
					<div className='user-nav__icon-box'>
						<Icon icon='bookmark' className='user-nav__icon' />
						<span className='user-nav__notification'>7</span>
					</div>
					<div className='user-nav__icon-box'>
						<Icon icon='chat' className='user-nav__icon' />
						<span className='user-nav__notification'>7</span>
					</div>
					<Link className='user-nav__icon-box' to={PROFILE}>
						<img
							src={userPhoto}
							alt='User profile'
							className='user-nav__user-photo'
						/>
						<span className='user-nav__user-name'>{user && user.name}</span>
					</Link>
				</nav>
			</header>
		</Fragment>
	);
};

Header.propTypes = {
	logout: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
	profile: PropTypes.object.isRequired,
	getCurrentProfile: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
	auth: state.auth,
	profile: state.profile,
});

export default connect(mapStateToProps, { logout, getCurrentProfile })(Header);
