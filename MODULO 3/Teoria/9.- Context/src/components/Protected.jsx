import { useAuth } from "../contexts";
import { Navigate } from "react-router-dom";
export const Protected = ({ children }) => {
  const { user } = useAuth();
  if (user) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
};
