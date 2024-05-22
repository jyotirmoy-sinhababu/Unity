import logo from '../../assets/logo.png';

import { useState } from 'react';
import Login from './Login';
import SignUp from './SignUp';

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <div className='h-[100vh] flex flex-col justify-center items-center gap-14'>
      {' '}
      <div className='flex flex-col justify-center items-center  gap-6'>
        <img className='w-[167px]' src={logo} alt='logo' />
        {isLogin ? <Login /> : <SignUp />}
      </div>
      <div className='flex justify-center items-center gap-2'>
        <div className='sm:w-[200px] w-[145px] h-0 border border-zinc-800'></div>
        <p className='text-xl text-slate-400 font-medium'>OR</p>
        <div className='sm:w-[200px] w-[145px] h-0 border border-zinc-800'></div>
      </div>
      <div className='flex justify-center items-center gap-3 text-[17px]'>
        <p className='text-slate-400'>
          {isLogin ? "Don't have an account?" : 'Already have an account?'}
        </p>
        <button
          onClick={() => {
            setIsLogin(!isLogin);
          }}
          className='text-indigo-800'
        >
          {isLogin ? 'Sign up' : 'Log in'}
        </button>
      </div>
    </div>
  );
};

export default AuthForm;
