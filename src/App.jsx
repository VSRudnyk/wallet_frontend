import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { Loader } from './components/Loader';
import ErrorPage from './components/Error';
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
  import('./pages/Login' /* webpackChunkName: "LoginPage" */)
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
            element={<Navigate to="/wallet_frontend/register" />}
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
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Suspense>
    </>
  );
};
