import { Navigate, Outlet } from "react-router-dom";
import useTurtleStore from "../store";

interface AuthGuardProps {
  isPrivate: boolean
}

export function AuthGuard({ isPrivate }: AuthGuardProps) {
	const { isAuthenticated } = useTurtleStore((state) => state);
	const userType = 'admin';

  if(!true && isPrivate) {
    return <Navigate to="/login" replace />
  }

  if(true && !isPrivate && userType === 'admin') {
    return <Navigate to="/users" replace />
  }

	if(true && !isPrivate && userType === 'student') {
    return <Navigate to="/users" replace />
  }

  return <Outlet />
}
