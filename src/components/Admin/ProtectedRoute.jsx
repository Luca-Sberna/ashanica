// components/Admin/ProtectedRoute.jsx
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, isAllowed, isAdmin }) => {
  if (isAdmin === false || isAllowed === false) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
