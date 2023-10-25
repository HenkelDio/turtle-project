import { Navigate, Outlet } from "react-router-dom";

interface AuthGuardProps {
  isPrivate: boolean
}

export function AuthGuard({ isPrivate }: AuthGuardProps) {
  const signedIn = true;
	const userType = 'admin';

  if(!signedIn && isPrivate) {
    return <Navigate to="/login" replace />
  }

  if(signedIn && !isPrivate && userType === 'admin') {
    return <Navigate to="/users" replace />
  }

	if(signedIn && !isPrivate && userType === 'student') {
    return <Navigate to="/users" replace />
  }

  return <Outlet />
}
