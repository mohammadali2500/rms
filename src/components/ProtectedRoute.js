import React from "react";
import { Navigate } from "react-router-dom";
import { useUser } from "../context/UserContext";

const ProtectedRoute = ({ allowedRoles, actionRoles, children }) => {
  const user = useUser();

  const hasAccess = allowedRoles.some((r) => user.roles.includes(r));
  if (!hasAccess) return <Navigate to="/not-authorized" replace />;

  const isReadOnly = !actionRoles.some((r) => user.roles.includes(r));
  return React.cloneElement(children, { isReadOnly });
};

export default ProtectedRoute;