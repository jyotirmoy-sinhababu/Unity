import Footer from '../../components/footer/Footer';
import Navbar from '../../components/nav/Navbar';
import IntroPage from '../intropage/IntroPage';

import { useSelector } from 'react-redux';

const LandingPage = () => {
  const auth = useSelector((state) => state.authReducer.user);
  console.log(auth);
  return (
    <div>
      <Navbar />
      <IntroPage />
      <Footer />
    </div>
  );
};

export default LandingPage;
