import './App.css';
import LandingPage from './pages/landingPage/LandingPage';
import AuthPage from './pages/auth/AuthPage';

import { Route, Routes } from 'react-router-dom';
import ProfilePage from './pages/ProfilePage/ProfilePage';

function App() {
  return (
    <>
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path='/auth' element={<AuthPage />} />
        <Route path='/:username' element={<ProfilePage />} />
      </Routes>
    </>
  );
}

export default App;
