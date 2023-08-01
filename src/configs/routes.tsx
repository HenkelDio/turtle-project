import { Switch, Route, Redirect } from 'react-router-dom';
import Profile from '../pages/profile';
import Login from '../pages/login';
import useTurtleStore from '../store';
import UserAdministration from '../pages/adminPage/usersAdministration';
import Courses from '../pages/userPage/courses';
import Certificates from '../pages/userPage/certificates';
import UserRegister from '../pages/adminPage/userRegister';
import StudentRegister from '../pages/adminPage/userRegister/studentRegister';

const Routes: React.FC = () => {
	const { credentials, isAuthenticated } = useTurtleStore((state) => state);

	function PrivateRoute({ component: Component, isAuthenticated, ...rest }: any) {
		return (
			<Route {...rest} render={(props) => (
				isAuthenticated ? <Component {...props} />
					: <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
			)} />
		);
	}


	if (credentials.type === 'admin') {
		return (
			<Switch>
				<Route exact path='/admin/users' component={UserAdministration} />
				<Route path='/admin/users/student-register' component={StudentRegister} />
			</Switch>
		)
	}

	if (credentials.type === 'user') {
		return (
			<Switch>
				<PrivateRoute path='/courses' component={Courses} isAuthenticated={isAuthenticated} />
				<PrivateRoute path='/certificates' component={Certificates} isAuthenticated={isAuthenticated} />
				<PrivateRoute path='/profile' component={Profile} isAuthenticated={isAuthenticated} />
			</Switch>
		)
	}

	return (
		<Switch>
			<Route path='/login' component={Login}></Route>
		</Switch>
	)
}

export default Routes;