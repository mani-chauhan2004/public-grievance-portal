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

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* public routes */}
          <Route path="/" element={<LoginPage />} />

          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />

          {/* protected routes */}
          {JSON.parse(localStorage.getItem("user")).role === "admin" ? (
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
          ) : (
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
                    <AdminDashboard />
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
          )}
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
