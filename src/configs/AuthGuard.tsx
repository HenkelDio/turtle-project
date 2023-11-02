import { Navigate, Outlet } from "react-router-dom";
import useTurtleStore from "../store";

interface AuthGuardProps {
  isPrivate: boolean
}

export function AuthGuard({ isPrivate }: AuthGuardProps) {
	const { isAuthenticated } = useTurtleStore((state) => state);
	const userType = 'student';

  if(!isAuthenticated && isPrivate) {
    return <Navigate to="/" replace />
  }

  if(isAuthenticated && !isPrivate && userType === 'admin') {
    return <Navigate to="/users" replace />
  }

	if(isAuthenticated && !isPrivate && userType === 'student') {
    return <Navigate to="/student/courses" replace />
  }

  return <Outlet />
}
