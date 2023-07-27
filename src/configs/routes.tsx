import { Switch, Route, Redirect } from 'react-router-dom';
import Courses from '../pages/courses';
import Certificates from '../pages/certificates';
import Profile from '../pages/profile';
import Login from '../pages/login';
import useTurtleStore from '../store';
import UserPage from '../pages/user';

const Routes: React.FC = () => {
	const { credentials } = useTurtleStore((state) => state);

	// function LoginRoute({ component: Component, isAuthenticated, ...rest }: any) {
	// 	return (
	// 		<Route {...rest} render={(props) => (
	// 			isAuthenticated ? <Component {...props} />
	// 		: <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
	// 		)} />
	// 	);
	// }
	
	
	if(credentials.type === 'admin') {
		return(
			<Switch>
				<Route path='/admin/users' component={UserPage} />
			</Switch>
		)
	}

	if(credentials.type === 'user') {
		<Switch>
			<Route path='/courses' component={Courses}/>
			<Route path='/certificates' component={Certificates}/>
			<Route path='/profile' component={Profile} />
		</Switch>
	}

	return(
		<Switch>
			<Route path='/login' component={Login}></Route>
			<Route path='/courses' component={Courses}/>
			<Route path='/certificates' component={Certificates} />
			<Route path='/profile' component={Profile} />
		</Switch>
	)
}

export default Routes;