import { Navigate, Outlet } from "react-router-dom";
import useTurtleStore from "../store";

interface AuthGuardProps {
	isPrivate: boolean;
}

export function AuthGuard({ isPrivate }: AuthGuardProps) {
	const { isAuthenticated, credentials } = useTurtleStore((state) => state);

	const userType = credentials.type;

	if (!isAuthenticated && isPrivate) {
		return <Navigate to="/" replace />;
	}

	if (
		isAuthenticated &&
		!isPrivate &&
		(userType === "admin" || userType === "workplace")
	) {
		return <Navigate to="/users" replace />;
	}

	if (isAuthenticated && !isPrivate && userType === "student") {
		return <Navigate to="/student/courses" replace />;
	}

	return <Outlet />;
}
