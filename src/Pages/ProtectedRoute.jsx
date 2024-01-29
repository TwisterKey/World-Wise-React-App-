import { useEffect } from "react";
import { useAuth } from "../Contexts/FakeAuthContext";
import { useNavigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const { isAuthentificated } = useAuth();
  const navigate = useNavigate();

  useEffect(
    function () {
      if (!isAuthentificated) navigate("/");
    },
    [isAuthentificated, navigate]
  );

  return isAuthentificated ? children : null;
}

export default ProtectedRoute;
