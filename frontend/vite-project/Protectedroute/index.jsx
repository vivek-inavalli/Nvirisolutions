import { Route, Navigate } from "react-router-dom";
import Cookies from "js-cookie";

const ProtectedRoute = (props) => {
  const token = Cookies.get("jwtToken");
  if (token === undefined) {
    return <Navigate to="/" />;
  }
  return <Route {...props} />;
};

export default ProtectedRoute;
