import "./App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Login from "./components/authorization/Login";
import Register from "./components/authorization/Register";
import MainLayout from "./components/NavBar/MainLayout";
import RankingPage from "./components/ranking/RankingPage";
import { useEffect, useState } from "react";

function App() {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    setAuthenticated(!!localStorage.getItem("authToken"));
  }, []);

  return (
    <div>
      <BrowserRouter>
        {authenticated ? <AuthenticatedRoutes /> : <UnauthenticatedRoutes />}
      </BrowserRouter>
    </div>
  );
}

const UnauthenticatedRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<Navigate to="/register" replace />} />
    </Routes>
  );
};

const AuthenticatedRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/dashboard" element={<RankingPage />} />
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Route>
    </Routes>
  );
};

export default App;
