import { DiagramTab } from 'components/DiagramTab';
import { DashboardPage } from 'pages/DashboardPage';
import { Route, Routes } from 'react-router-dom';

export const Home = () => {
  return (
    <Routes>
      <Route path="*" element={<DashboardPage />} />
      <Route path="/diagram" element={<DiagramTab />} />
    </Routes>
  );
};
// * При переходе на компонент Table падает страница и выдаёт ошибку в консоле. После исправления ошибки раскомментируйте путь
