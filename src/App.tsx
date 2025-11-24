import "./App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Login from "./components/authorization/Login";
import Register from "./components/authorization/Register";
import MainLayout from "./components/NavBar/MainLayout";
import { useContext } from "react";
import { UserInfoContext } from "./components/UserInfo/UserInfoContext";
import RankPage from "./components/ranking/RankPage";

function App() {
  const { authToken } = useContext(UserInfoContext);

  return (
    <div>
      <BrowserRouter>
        {authToken ? <AuthenticatedRoutes /> : <UnauthenticatedRoutes />}
      </BrowserRouter>
    </div>
  );
}

const UnauthenticatedRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<Navigate to="/login" replace />} />
    </Routes>
  );
};

const AuthenticatedRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/rate" element={<RankPage />} />
        <Route path="/" element={<Navigate to="/rate" replace />} />
        <Route path="*" element={<Navigate to="/rate" replace />} />
      </Route>
    </Routes>
  );
};

export default App;
