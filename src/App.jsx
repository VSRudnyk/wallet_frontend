import { DashboardPage } from 'pages/Dashboard';
import { Routes, Route, Navigate } from 'react-router-dom';
import { PrivatRoute } from './routers/PrivatRouter';
import { PublickRoute } from 'routers/PublicRouter';
import { RegistrationPage } from 'pages/RegistrationPage';
import { LoginForm } from 'components/LoginForm/LoginForm';
export const App = () => {
  return (
    <>
      <Routes>
        <Route
          path="/wallet_frontend/register"
          element={
            <PublickRoute>
              <RegistrationPage />
            </PublickRoute>
          }
        />
        <Route
          path="/wallet_frontend/login"
          element={
            <PublickRoute>
              <LoginForm />
            </PublickRoute>
          }
        />
        <Route
          path="/wallet_frontend"
          element={
            true ? (
              <Navigate to="/wallet_frontend/register" />
            ) : (
              <Navigate to="/wallet_frontend/home" />
            )
          }
        />
        <Route
          path="/wallet_frontend/home"
          element={
            <PrivatRoute>
              <DashboardPage />
            </PrivatRoute>
          }
        />
        <Route
          path="/wallet_frontend/currency"
          element={
            <PrivatRoute>
              <DashboardPage />
            </PrivatRoute>
          }
        />

        <Route
          path="/wallet_frontend/diagram"
          element={
            <PrivatRoute>
              <DashboardPage />
            </PrivatRoute>
          }
        />
        <Route path="*" element={<h1>NotFound </h1>} />
      </Routes>
    </>
  );
};
