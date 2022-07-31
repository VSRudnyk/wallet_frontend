import { Header } from 'components/Header/Header';
import { Routes, Route } from 'react-router-dom';
import { Home } from 'routers/PrivatRouter';
import { RegistrationPage } from 'pages/RegistrationPage';
import { LoginPage } from 'pages/LoginPage'

export const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/wallet_frontend/*" element={<Home />} />
        <Route path="/signup" element={<RegistrationPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<h1>NotFound </h1>} />
      </Routes>
    </>
  );
};