import { Routes, Route } from 'react-router-dom';
import { Home } from 'routers/PrivatRouter';
import { RegistrationPage } from 'pages/RegistrationPage';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/wallet_frontend/*" element={<Home />} />
        <Route path="/signup" element={<RegistrationPage />} />
        <Route path="*" element={<h1>NotFound </h1>} />
      </Routes>
    </>
  );
};
