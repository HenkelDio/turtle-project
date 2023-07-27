import { Switch, Route, Redirect } from 'react-router-dom';
import Courses from '../pages/courses';
import Certificates from '../pages/certificates';
import Profile from '../pages/profile';
import Login from '../pages/login';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import useTurtleStore from '../store';
import UserPage from '../pages/user';

const Routes: React.FC = () => {
	const { isAuthenticated, credentials } = useTurtleStore((state) => state);

	function PrivateRoute({ component: Component, isAuthenticated, ...rest }: any) {
		return (
			<Route {...rest} render={(props) => (
				isAuthenticated ? <Component {...props} />
			: <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
			)} />
		);
	}
	
	
	if(credentials.type === 'admin') {
		return(
			<Switch>
				<Route path='/login' component={Login}></Route>
				<PrivateRoute path='/users' component={UserPage} isAuthenticated={isAuthenticated}/>
			</Switch>
		)
	}

	if(credentials.type === 'user') {
		<Switch>
			<Route path='/login' component={Login}></Route>
			<PrivateRoute path='/courses' component={Courses} isAuthenticated={isAuthenticated}/>
			<PrivateRoute path='/certificates' component={Certificates} isAuthenticated={isAuthenticated}/>
			<PrivateRoute path='/profile' component={Profile}  isAuthenticated={isAuthenticated} />
		</Switch>
	}

	return(
		<Switch>
			<Route path='/login' component={Login}></Route>
			<PrivateRoute path='/courses' component={Courses} isAuthenticated={isAuthenticated}/>
			<PrivateRoute path='/certificates' component={Certificates} isAuthenticated={isAuthenticated}/>
			<PrivateRoute path='/profile' component={Profile}  isAuthenticated={isAuthenticated} />
		</Switch>
	)
}

export default Routes;