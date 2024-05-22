import ReactParallaxTilt from 'react-parallax-tilt';

import AuthForm from '../../components/authform/AuthForm';

import imgOne from '../../assets/photoOne.svg';
import imgTwo from '../../assets/photoTwo.svg';
import imgThree from '../../assets/photoThree.svg';

const AuthPage = () => {
  return (
    <div className='flex gap-[111px] items-center mx-[7%]'>
      <div className='hidden md:block'>
        <ReactParallaxTilt>
          <img
            className='w-[50%] relative top-[40px] left-[200px] z-10'
            src={imgOne}
            alt='first photo'
          />
          <img
            className='w-[35%] relative left-[340px] z-30'
            src={imgTwo}
            alt='first photo'
          />
          <img
            className='w-[35%] relative bottom-[180px] left-[100px] z-50'
            src={imgThree}
            alt='first photo'
          />
        </ReactParallaxTilt>
      </div>
      <div>
        <AuthForm />
      </div>
    </div>
  );
};

export default AuthPage;
