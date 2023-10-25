import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthGuard } from "./AuthGuard";
import Login from "../pages/login";
import UserAdministration from "../pages/adminPage/usersAdministration";
import ContentLayout from "../layouts/ContentLayout";
import UserRegister from "../pages/adminPage/userRegister";
import CourseAdministration from "../pages/adminPage/courseAdministration";
import CourseRegister from "../pages/adminPage/courseRegister";

export function Router() {
  return(
    <BrowserRouter>
      <Routes>

        <Route element={<AuthGuard isPrivate={false} />}>
          <Route path="/login" element={<Login />}/>
        </Route>

        <Route element={<AuthGuard isPrivate={true} />}>
          <Route element={<ContentLayout />}>
            <Route path="/users" element={<UserAdministration />}/>
						<Route path="/users/create" element={<UserRegister />}/>

						<Route path="/courses" element={<CourseAdministration />}/>
						<Route path="/courses/create" element={<CourseRegister />}/>
          </Route>
        </Route>

      </Routes>
    </BrowserRouter>
  )
}