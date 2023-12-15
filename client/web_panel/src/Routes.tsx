import { MemoryRouter, Route, Routes } from 'react-router-dom';
import About from './pages/about';
import Help from './pages/help';
import Main from './pages/main';
import Settings from './pages/settings';

export default () => {
  return (
    <MemoryRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/help" element={<Help />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </MemoryRouter>
  );
};
