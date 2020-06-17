import axios from 'axios';
import setAuthToken from './utils/setAuthToken';
// toast
import { toastr } from 'react-redux-toastr';

// !constants

let initialState = {
	token: localStorage.getItem('token'),
	isAuthenticated: null,
	loading: true,
	user: null,
};

let REGISTER_SUCCESS = 'REGISTER_SUCCESS';
let REGISTER_FAIL = 'REGISTER_FAIL';
let USER_LOADED = 'USER_LOADED';
let AUTH_ERROR = 'AUTH_ERROR';
let LOGIN_SUCCESS = 'LOGIN_SUCCESS';
let LOGIN_FAIL = 'LOGIN_FAIL';
let LOGOUT = 'LOGOUT';
let CLEAR_PROFILE = 'CLEAR_PROFILE';

// !reducer

export default function(state = initialState, action) {
	let { type, payload } = action;
	switch (type) {
		case USER_LOADED:
			return { ...state, isAuthenticated: true, loading: false, user: payload };
		case REGISTER_SUCCESS:
		case LOGIN_SUCCESS:
			localStorage.setItem('token', payload.token);
			return {
				...state,
				...payload,
				isAuthenticated: true,
				loading: false,
			};
		case REGISTER_FAIL:
		case AUTH_ERROR:
		case LOGIN_FAIL:
		case LOGOUT:
			localStorage.removeItem('token');
			return {
				...state,
				token: null,
				isAuthenticated: false,
				loading: false,
			};
		default:
			return state;
	}
}

// *thunks

// Register user
export let registerUser = ({ name, email, password }) => async (dispatch) => {
	let config = {
		headers: {
			'Content-Type': 'application/json',
		},
	};

	let body = JSON.stringify({ name, email, password });

	try {
		let res = await axios.post('/api/users', body, config);
		dispatch({
			type: REGISTER_SUCCESS,
			payload: res.data,
		});
		dispatch(loadUser());
		toastr.success('Registro exitoso', 'Redirigiendo a inicio...', {
			timeOut: 2000,
		});
	} catch (err) {
		let errors = err.response.data.errors;

		if (errors) {
			errors.forEach((error) => toastr.error('Error', error.msg));
		}
		dispatch({
			type: REGISTER_FAIL,
		});
	}
};

// Load user
export let loadUser = () => async (dispatch) => {
	if (localStorage.token) {
		setAuthToken(localStorage.token);
	}

	try {
		let res = await axios.get('/api/auth');
		dispatch({
			type: USER_LOADED,
			payload: res.data,
		});
	} catch (err) {
		let errors = err.response.data.errors;

		if (errors) {
			errors.forEach((error) => toastr.error('Error', error.msg));
		}
		dispatch({
			type: AUTH_ERROR,
		});
	}
};

// Login user
export let loginUser = (email, password) => async (dispatch) => {
	let config = {
		headers: {
			'Content-Type': 'application/json',
		},
	};

	let body = JSON.stringify({ email, password });

	try {
		let res = await axios.post('/api/auth', body, config);
		dispatch({
			type: LOGIN_SUCCESS,
			payload: res.data,
		});
		dispatch(loadUser());
		toastr.success('¡Bienvenido!', 'Iniciando sesión...', {
			timeOut: 2000,
		});
	} catch (err) {
		let errors = err.response.data.errors;

		if (errors) {
			errors.forEach((error) => toastr.error('Error', error.msg));
		}
		dispatch({
			type: LOGIN_FAIL,
		});
	}
};

// Logout

export let logout = () => (dispatch) => {
	dispatch({ type: LOGOUT });
	dispatch({ type: CLEAR_PROFILE });
};
