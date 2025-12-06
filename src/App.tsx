import "./App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Login from "./components/authorization/Login";
import Register from "./components/authorization/Register";
import MainLayout from "./components/navBar/MainLayout";
import { useContext } from "react";
import { UserInfoContext } from "./components/UserInfo/UserInfoContext";
import ExplorePage from "./components/explore/ExplorePage";
import ComparisonPage from "./components/comparison/ComparisonPage";
import RankingsPage from "./components/rankings/RankingsPage";
import ProfilePage from "./components/ProfilePage/ProfilePage";

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
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/comparison" element={<ComparisonPage />} />
        <Route path="/rankings" element={<RankingsPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/" element={<Navigate to="/explore" replace />} />
        <Route path="*" element={<Navigate to="/explore" replace />} />
      </Route>
    </Routes>
  );
};

export default App;
