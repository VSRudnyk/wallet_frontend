import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { Loader } from './components/Loader';
const PrivatRoute = lazy(() =>
  import('./routers/PrivatRouter' /* webpackChunkName: "PrivatRoute" */)
);
const DashboardPage = lazy(() =>
  import('./pages/Dashboard' /* webpackChunkName: "DashboardPage" */)
);
const PublickRoute = lazy(() =>
  import('./routers/PublicRouter' /* webpackChunkName: "PublickRoute" */)
);
const RegistrationPage = lazy(() =>
  import('./pages/Registration' /* webpackChunkName: "RegistrationPage" */)
);
const LoginPage = lazy(() =>
  import('./pages/Login' /* webpackChunkName: "LoginForm" */)
);

export const App = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
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
                <LoginPage />
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
      </Suspense>
    </>
  );
};
