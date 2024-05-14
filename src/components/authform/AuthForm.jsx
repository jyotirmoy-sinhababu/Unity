import logo from '../../assets/logo.png';

import { useState } from 'react';
import Login from './Login';
import SignUp from './SignUp';

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <>
      {' '}
      <div>
        <img src={logo} alt='logo' />
        {isLogin ? <Login /> : <SignUp />}
      </div>
      <div className='flex'>
        <div className='w-[200px] border-2'></div>
        <p>OR</p>
        <div className='w-[200px] border-2'></div>
      </div>
    </>
  );
};

export default AuthForm;
