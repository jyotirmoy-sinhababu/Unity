import './App.css';
import AuthForm from './components/authform/AuthForm';
import LandingPage from './pages/landingPage/LandingPage';

import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path='auth' element={<AuthForm />} />
      </Routes>
    </>
  );
}

export default App;
