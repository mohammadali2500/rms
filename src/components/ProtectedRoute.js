import React from "react";
import { Navigate } from "react-router-dom";
import { useUser } from "../context/UserContext";

const ProtectedRoute = ({ allowedRoles, actionRoles, children }) => {
  const user = useUser();

  if (!user || !user.roles) return <Navigate to="/login" replace />;

  const hasAccess = user.roles.some((r) => allowedRoles.includes(r));
  if (!hasAccess) return <Navigate to="/not-authorized" replace />;

  const isReadOnly = !user.roles.some((r) => actionRoles.includes(r));
  return React.cloneElement(children, { isReadOnly });
};

export default ProtectedRoute;