import { Switch, Route, Redirect } from 'react-router-dom';
import Courses from '../pages/courses';
import Certificates from '../pages/certificates';
import Profile from '../pages/profile';
import Login from '../pages/login';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Routes: React.FC = () => {
	const [isAuthenticated] = useState(true)

	function PrivateRoute({ component: Component, isAuthenticated, ...rest }: any) {
		return (
			<Route {...rest} render={(props) => (
				isAuthenticated ? <Component {...props} />
			: <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
			)} />
		);
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