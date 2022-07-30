import { Header } from 'components/Header/Header';
import { Routes, Route } from 'react-router-dom';
import { Home } from 'routers/PrivatRouter';

export const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/wallet_frontend/*" element={<Home />} />
        <Route path="*" element={<h1>NotFound </h1>} />
      </Routes>
    </>
  );
};
