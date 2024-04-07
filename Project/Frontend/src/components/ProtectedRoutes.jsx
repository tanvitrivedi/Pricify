import { Navigate } from "react-router-dom";

const ProtectedRoutes = ({ component: Component, ...restProps }) => {
  const userData = JSON.parse(localStorage.getItem("auth-user") || "{}");
  if (!Object.keys(userData).length) {
    return <Navigate to="/" />;
  }
  return <Component {...restProps} />;
};

export default ProtectedRoutes;
