// src/App.js

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { UserProvider, useUser } from "./context/UserContext";
import Sidebar from "./menu/Sidebar";
import ProtectedRoute from "./routes/ProtectedRoute";
import { RouteConfig } from "./routes/RouteConfig";
import Unauthorized from "./screens/Unauthorized";

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

          <Route path="/unauthorized" element={<Unauthorized />} />

          <Route
            path="*"
            element={<Navigate to="/configuration/static/currency-setup" />}
          />
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