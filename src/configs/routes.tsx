import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthGuard } from "./AuthGuard";
import Login from "../pages/login";
import UserAdministration from "../pages/adminPage/usersAdministration";
import ContentLayout from "../layouts/ContentLayout";
import UserRegister from "../pages/adminPage/userRegister";
import CourseAdministration from "../pages/adminPage/courseAdministration";
import CourseRegister from "../pages/adminPage/courseRegister";
import StudentLayout from "../layouts/StudentLayout";
import Courses from "../pages/userPage/courses";
import ClassPage from "../pages/userPage/classesPage";
import ExamPage from "../pages/userPage/ExamPage";
import Profile from "../pages/profile";
import ProfilePage from "../pages/login";
import CertificatesPage from "../pages/userPage/CertificatesPage";

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
						<Route path="/profile" element={<Profile />}/>
          </Route>

					<Route element={<StudentLayout />}>
            <Route path="/student/courses" element={<Courses />}/>
						<Route path="/student/certificates" element={<CertificatesPage />}/>
						<Route path="/course/:idCourse/:idModule/:idContent" element={<ClassPage />}/>
						<Route path="/course/exam/:idCourse" element={<ExamPage />} />
						<Route path="/student/profile" element={<Profile />} />
          </Route>
        </Route>

      </Routes>
    </BrowserRouter>
  )
}