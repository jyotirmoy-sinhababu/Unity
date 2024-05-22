import './App.css';
import LandingPage from './pages/landingPage/LandingPage';
import AuthPage from './pages/auth/AuthPage';

import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path='auth' element={<AuthPage />} />
      </Routes>
    </>
  );
}

export default App;
