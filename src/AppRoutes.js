import React from "react";
import { Routes, Route } from "react-router-dom";
import { LoginPage } from "./pages/Login/Login";
import { Dashboard } from "./pages/Dashboard/Dashboard";
import { ProtectedLayout } from "./common/containers/Layout/ProtectedLayout";

function AppRoutes() {
    return (
        <Routes>
        <Route element={<LoginPage />}>
          <Route path="/" element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>
  
        <Route path="/mern" element={<ProtectedLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    )
}

export default AppRoutes;