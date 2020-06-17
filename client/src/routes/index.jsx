import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';

// Auth
import Login from '../components/auth/Login';
import Register from '../components/auth/Register';

// Pages
import Home from '../components/pages/home';
import Profile from '../components/pages/profile';
import EditProfile from '../components/pages/profile/edit';
import Community from '../components/pages/community';
// import Settings from '../components/pages/settings';

// Routes
import {
	ROOT,
	REGISTER,
	HOME,
	PROFILE,
	PROFILE_EDIT,
	CHAT,
	COMMUNITY,
} from './routes';

const Routes = () => {
	return (
		<Router>
			<Fragment>
				<Switch>
					<Route exact path={ROOT} component={Login} />
					<Route exact path={REGISTER} component={Register} />
					<PrivateRoute exact path={HOME} component={Home} />
					<PrivateRoute exact path={PROFILE} component={Profile} />
					<PrivateRoute exact path={PROFILE_EDIT} component={EditProfile} />
					<PrivateRoute exact path={CHAT} component={Home} />
					<PrivateRoute exact path={COMMUNITY} component={Community} />
				</Switch>
			</Fragment>
		</Router>
	);
};

export default Routes;
