import React from "react";
import AdminDashboard from "./pages/AdminDashboard";
import SubmitGrievancePanel from "./pages/SubmitGrievancePanel";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import { AuthProvider } from "./contexts/AuthProvider";
import ProtectedRoute from "./components/ProtectedRoute";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CitizenHomePage from "./pages/CitizenHomePage";
import AdminHomePage from "./pages/AdminHomePage";
import CitizenDashboard from "./pages/CitizenDashboard";
import DepartmentDashboard from "./pages/DepartmentDashboard";
import DepartmentHomePage from "./pages/DeaprtmentHomePage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  const userRole = JSON.parse(localStorage.getItem("user"))?.role;
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* public routes */}
          <Route path="/" element={<LoginPage />} />

          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />

          {/* protected routes */}
          {userRole === "admin" ? (
            <>
              <Route
                path="/admin"
                element={
                  <ProtectedRoute>
                    <AdminHomePage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/admin/dashboard"
                element={
                  <ProtectedRoute>
                    <AdminDashboard />
                  </ProtectedRoute>
                }
              />
            </>
          ) : userRole === "citizen"? (
            <>
              <Route
                path="/citizen"
                element={
                  <ProtectedRoute>
                    <CitizenHomePage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/citizen/dashboard"
                element={
                  <ProtectedRoute>
                    <CitizenDashboard />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/citizen/submit-grievance"
                element={
                  <ProtectedRoute>
                    <SubmitGrievancePanel />
                  </ProtectedRoute>
                }
              />
            </>
          ) : (
            <>
              <Route
                path="/officer"
                element={
                  <ProtectedRoute>
                    <DepartmentHomePage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/officer/dashboard"
                element={
                  <ProtectedRoute>
                    <DepartmentDashboard />
                  </ProtectedRoute>
                }
              />
            </>
          )}
          <Route
            path="/*"
            element={
                <NotFoundPage />
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
