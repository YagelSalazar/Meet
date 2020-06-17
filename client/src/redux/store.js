import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { reducer as toastrReducer } from 'react-redux-toastr';
import alertReducer from './alertDuck';
import authReducer from './authDuck';
import profileReducer from './profileDuck';
import thunk from 'redux-thunk';

let rootReducer = combineReducers({
	alert: alertReducer,
	auth: authReducer,
	profile: profileReducer,
	toastr: toastrReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore() {
	let store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
	return store;
}
