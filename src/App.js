import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserProvider } from "./context/UserContext";
import ProtectedRoute from "./components/ProtectedRoute";
import MainLayout from "./layout/MainLayout";
import Login from "./pages/Login";
import NotAuthorized from "./pages/NotAuthorized";
import { RoutingConfiguration } from "./config/RoutingConfiguration";
import { flattenRoutes } from "./utils/routeUtils";

const user = {
  name: "John Doe",
  roles: ["reader", "analyst", "approver"], // change for testing
};

function App() {
  const flatRoutes = flattenRoutes(RoutingConfiguration);

  return (
    <UserProvider user={user}>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/not-authorized" element={<NotAuthorized />} />

          {flatRoutes.map((route) => {
            const Screen = route.component;
            return (
              <Route
                key={route.path}
                path={route.path}
                element={
                  <MainLayout>
                    <ProtectedRoute
                      allowedRoles={route.allowedRoles}
                      actionRoles={route.actionRoles}
                    >
                      <Screen />
                    </ProtectedRoute>
                  </MainLayout>
                }
              />
            );
          })}
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;