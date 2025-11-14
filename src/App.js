import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { UserProvider, useUser } from "./context/UserContext";
import ProtectedRoute from "./components/ProtectedRoute";
import MainLayout from "./layout/MainLayout";
import Login from "./pages/Login";
import NotAuthorized from "./pages/NotAuthorized";
import { RouteConfig } from "./config/RouteConfig";
import { flattenRoutes } from "./utils/routeUtils";
import Home from "./pages/Home";
import Sidebar from "./components/Sidebar";

const AppContent = () => {
  const { roles: userRoles } = useUser();

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <div style={{ flex: 1, padding: 20 }}>
        <Routes>
          {RouteConfig.map(route => (
            <Route
              key={route.id}
              path={route.path}
              element={
                <ProtectedRoute
                  element={route.component}
                  userRoles={userRoles}
                  allowedRoles={route.allowedRoles}
                  actionRoles={route.actionRoles}
                />
              }
            />
          ))}

          <Route path="/unauthorized" element={<NotAuthorized />} />
        </Routes>
      </div>
    </div>
  );
};

const App = () => (
  <UserProvider>
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  </UserProvider>
);

export default App;