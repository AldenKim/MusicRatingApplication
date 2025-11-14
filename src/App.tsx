import "./App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Login from "./components/authorization/Login";
import Register from "./components/authorization/Register";

function App() {
  return (
    <div>
      <BrowserRouter>
        <UnauthenticatedRoutes />
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

export default App;
