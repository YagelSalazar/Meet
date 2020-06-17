import React, { useEffect } from 'react';
import Routing from './routes/index';
// Style
import './App.scss';
import ReduxToastr from 'react-redux-toastr';
// Redux
import { Provider } from 'react-redux';
import generateStore from './redux/store';
import { loadUser } from './redux/authDuck';
import setAuthToken from './redux/utils/setAuthToken';
let store = generateStore();

if (localStorage.token) {
	setAuthToken(localStorage.token);
}

const App = () => {
	useEffect(() => {
		store.dispatch(loadUser());
	}, []);

	return (
		<Provider store={store}>
			<Routing />
			<ReduxToastr
				timeOut={3500}
				newestOnTop={false}
				preventDuplicates
				position='top-right'
				getState={(state) => state.toastr} // This is the default
				transitionIn='bounceIn'
				transitionOut='bounceOut'
				progressBar
				closeOnToastrClick
			/>
		</Provider>
	);
};

export default App;
