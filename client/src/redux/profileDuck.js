import axios from 'axios';
// import { setAlert } from './alertDuck';

// !constants
let initialState = {
	profile: null,
	profiles: [],
	repos: [],
	loading: true,
	error: {},
};
// !Reducer

let GET_PROFILE = 'GET_PROFILE';
let PROFILE_ERROR = 'PROFILE_ERROR';
let PROFILE_NOTFOUND = 'PROFILE_NOTFOUND';
let CLEAR_PROFILE = 'CLEAR_PROFILE';

export default function(state = initialState, action) {
	let { type, payload } = action;

	switch (type) {
		case GET_PROFILE:
			return {
				...state,
				profile: payload,
				loading: false,
			};
		case PROFILE_ERROR:
		case PROFILE_NOTFOUND:
			return {
				...state,
				error: payload,
				loading: false,
			};
		case CLEAR_PROFILE:
			return {
				...state,
				profile: null,
				services: [],
				loading: false,
			};
		default:
			return state;
	}
}

// !Thunks

// Get current users profile
export let getCurrentProfile = () => async (dispatch) => {
	try {
		let res = await axios.get('/api/profile/me');
		dispatch({
			type: GET_PROFILE,
			payload: res.data,
		});
	} catch (err) {
		if (err.response.status === 400) {
			dispatch({
				type: PROFILE_NOTFOUND,
				payload: { msg: err.response.statusText, status: err.response.status },
			});
		} else {
			dispatch({
				type: PROFILE_ERROR,
				payload: { msg: err.response.statusText, status: err.response.status },
			});
		}
	}
};
