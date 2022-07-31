import { Balance } from 'components/Balance/Balance';
import { Currency } from 'components/Currency/Currency';
import { Header } from 'components/Header/Header';
import { DashboardPage } from 'pages/DashboardPage';
import { Routes, Route } from 'react-router-dom';
import { Home } from 'routers/PrivatRouter';
import { RegistrationPage } from 'pages/RegistrationPage';

export const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<DashboardPage />}>
          <Route path="/wallet_frontend/main" element={<Balance />} />
          <Route path="/wallet_frontend/currency" element={<Currency />} />
          <Route
            path="/wallet_frontend/diagram"
            element={<h1>Statistica</h1>}
          />
          <Route path="*" element={<h1>NotFound </h1>} />
        </Route>

      </Routes>
    </>
  );
};