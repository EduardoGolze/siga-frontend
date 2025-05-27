import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import LoginPage from '../Pages/Index/Login';
import RegisterPage from '../Pages/Register/RegisterPage';
import Home from '../Pages/Home/Home';
import Layout from '../components/Layout/layout';

const ProtectedRoute = () => {
  const { autenticado } = useAuth();
  return autenticado ? <Outlet /> : <Navigate to="/" replace />;
};

const PublicRoute = () => {
  const { autenticado } = useAuth();
  return !autenticado ? <Outlet /> : <Navigate to="/home" replace />;
};

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<PublicRoute />}>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>

      <Route element={<Layout><ProtectedRoute /></Layout>}>
        <Route path="/home" element={<Home />} />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}