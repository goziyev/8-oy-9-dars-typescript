import { Route, Routes, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import LoginPage from "./components/LoginPage";
import ErrorPage from "./components/ErrorPage";
import { RootState } from "./store/store";

function App() {
  const navigate = useNavigate();

  const token: string | null = useSelector(
    (state: RootState) => state.userToken.token
  );
  const role: string | null = useSelector(
    (state: RootState) => state.userToken.role
  );

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
  }, [navigate]);

  function ProtectedRoute({
    children,
    redirectTo = "/login",
    isAuthentication,
  }: {
    children: React.ReactNode;
    redirectTo?: string;
    isAuthentication: boolean;
  }) {
    useEffect(() => {
      if (!isAuthentication) {
        navigate(redirectTo);
      }
    }, [isAuthentication, navigate, redirectTo]);

    return <>{isAuthentication ? children : null}</>;
  }

  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      {token && role === "guest" && (
        <>
          <Route
            path="/"
            element={
              <ProtectedRoute isAuthentication={!!token}>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admindashboard"
            element={
              <ProtectedRoute isAuthentication={!!token}>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/debtors"
            element={
              <ProtectedRoute isAuthentication={!!token}>
                <Debtors />
              </ProtectedRoute>
            }
          />
          <Route
            path="/employees"
            element={
              <ProtectedRoute isAuthentication={!!token}>
                <Employees />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<ErrorPage />} />
        </>
      )}

      {token && role === "teacher" && (
        <>
          <Route
            path="/"
            element={
              <ProtectedRoute isAuthentication={!!token}>
                <TeacherHome/>
              </ProtectedRoute>
            }
          />
          <Route
            path="/studentschedule"
            element={
              <ProtectedRoute isAuthentication={!!token}>
                <StudentSchedule />
              </ProtectedRoute>
            }
          />
          <Route
            path="/teachercourses"
            element={
              <ProtectedRoute isAuthentication={!!token}>
                <TeacherCourses />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<ErrorPage />} />
        </>
      )}

      {token && role === "student" && (
        <>
          <Route
            path="/"
            element={
              <ProtectedRoute isAuthentication={!!token}>
                <StudentHome />
              </ProtectedRoute>
            }
          />
          <Route
            path="/lessons"
            element={
              <ProtectedRoute isAuthentication={!!token}>
                <Lessons />
              </ProtectedRoute>
            }
          />
          <Route
            path="/tasks"
            element={
              <ProtectedRoute isAuthentication={!!token}>
                <Tasks />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<ErrorPage />} />
        </>
      )}
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

function Tasks(): JSX.Element {
  return <div>Tasks</div>;
}
function Home(): JSX.Element {
  return <div > Welcome Guest page</div>;
}
function TeacherHome(): JSX.Element {
  return <div>welcome Teacher Page </div>;
}
function StudentHome(): JSX.Element {
  return <div>Welcome student Page</div>;
}
function Lessons(): JSX.Element {
  return <div>Lessons</div>;
}
function TeacherCourses(): JSX.Element {
  return <div>TeacherCourses</div>;
}
function StudentSchedule(): JSX.Element {
  return <div>StudentSchedule</div>;
}
function AdminDashboard(): JSX.Element {
  return <div>AdminDashboard</div>;
}
function Employees(): JSX.Element {
  return <div>Employees</div>;
}
function Debtors(): JSX.Element {
  return <div>Debtors</div>;
}
export default App;
