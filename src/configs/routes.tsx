import { Switch, Route } from 'react-router-dom';
import Courses from '../pages/courses';
import Certificates from '../pages/certificates';
import Profile from '../pages/profile';

const Routes: React.FC = () => {
	return(
		<Switch>
			<Route exact path='/courses' component={Courses}></Route>
			<Route path='/certificates' component={Certificates}></Route>
			<Route path='/profile' component={Profile}></Route>
		</Switch>
	)
}

export default Routes;