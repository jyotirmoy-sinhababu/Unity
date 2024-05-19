import { useState } from 'react';

import useSignUpWithEmailandPassword from '../../hooks/useSignUpWithEmailandPassword';

const SignUp = () => {
  const [signUpInputs, setSignUpInputs] = useState({
    name: '',
    email: '',
    password: '',
  });

  const { signUp, isLoading } = useSignUpWithEmailandPassword();

  console.log(signUpInputs);

  return (
    <div className='flex flex-col gap-1'>
      <div className='flex flex-col gap-1'>
        <label className='text-slate-400 font-vollkorn' htmlFor='name'>
          Full name
        </label>
        <input
          className='w-[360px] h-[45px] border-2 rounded-md text-slate-400'
          type='name'
          onChange={(e) => {
            setSignUpInputs({
              ...signUpInputs,
              name: e.target.value,
            });
          }}
        />
      </div>
      <div className='flex flex-col gap-1'>
        {' '}
        <label className='text-slate-400 font-vollkorn' htmlFor='email'>
          Email
        </label>
        <input
          className='w-[360px] h-[45px] border-2 rounded-md text-slate-400'
          type='email'
          onChange={(e) => {
            setSignUpInputs({
              ...signUpInputs,
              email: e.target.value,
            });
          }}
        />
      </div>
      <div className='flex flex-col gap-1'>
        <label className='text-slate-400 font-vollkorn' htmlFor='password'>
          Password
        </label>
        <input
          className='w-[360px] h-[45px] border-2 rounded-md text-slate-400'
          type='password'
          onChange={(e) => {
            setSignUpInputs({
              ...signUpInputs,
              password: e.target.value,
            });
          }}
        />
      </div>
      <div className='flex justify-center items-center mt-[29px]'>
        {' '}
        <button
          onClick={(e) => {
            e.preventDefault();
            signUp(signUpInputs);
          }}
          className='w-[360px] h-[37px] flex justify-center items-center text-slate-400 rounded bg-cyan-900 font-abril'
        >
          Sign up
        </button>
      </div>
    </div>
  );
};

export default SignUp;
