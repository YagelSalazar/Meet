import uuid from 'uuid';

// constants
const initialState = [];
let SET_ALERT = 'SET_ALERT';
let REMOVE_ALERT = 'REMOVE_ALERT';

// reducer
export default function(state = initialState, action) {
	const { type, payload } = action;
	switch (type) {
		case 'SET_ALERT':
			return [...state, payload];
		case 'REMOVE_ALERT':
			return state.filter((alert) => alert.id !== payload);
		default:
			return state;
	}
}

// actions o thunks

export let setAlert = (msg, alertType, timeout = 3000) => (dispatch) => {
	const id = uuid.v4();

	dispatch({
		type: SET_ALERT,
		payload: { msg, alertType, id },
	});

	setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout);
};
