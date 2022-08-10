import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { Loader } from './components/Loader';
import ErrorPage from './pages/Error';
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
  import(
    './pages/Auth/RegistrationPage' /* webpackChunkName: "RegistrationPage" */
  )
);
const LoginPage = lazy(() =>
  import('./pages/Auth/LoginPage' /* webpackChunkName: "LoginPage" */)
);

export const App = () => {
  return (
    <>
      <Suspense fallback={<Loader color="#4a56e2" size="100px" />}>
        <Routes>
          <Route
            path="/register"
            element={
              <PublickRoute>
                <RegistrationPage />
              </PublickRoute>
            }
          />
          <Route
            path="/login"
            element={
              <PublickRoute>
                <LoginPage />
              </PublickRoute>
            }
          />
          <Route path="/" element={<Navigate to="/login" />} />
          <Route
            path="/home"
            element={
              <PrivatRoute>
                <DashboardPage />
              </PrivatRoute>
            }
          />
          <Route
            path="/currency"
            element={
              <PrivatRoute>
                <DashboardPage />
              </PrivatRoute>
            }
          />

          <Route
            path="/diagram"
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
