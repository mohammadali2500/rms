// src/routes/ProtectedRoute.js
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ element: Component, userRoles, allowedRoles, actionRoles }) => {
  const canView = allowedRoles.some(r => userRoles.includes(r));

  if (!canView) {
    return <Navigate to="/unauthorized" replace />;
  }

  // Read-only mode logic
  const isReadOnly = actionRoles
    ? !actionRoles.some(role => userRoles.includes(role))
    : false;

  return <Component userRoles={userRoles} isReadOnly={isReadOnly} />;
};

export default ProtectedRoute;