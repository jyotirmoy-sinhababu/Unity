import React from 'react';

const SignUp = () => {
  return (
    <div className='flex flex-col gap-1'>
      <div className='flex flex-col gap-1'>
        <label className='text-slate-400 font-vollkorn' for='name'>
          Full name
        </label>
        <input className='w-[360px] h-[45px] border-2 rounded-md' type='name' />
      </div>
      <div className='flex flex-col gap-1'>
        {' '}
        <label className='text-slate-400 font-vollkorn' for='email'>
          Email
        </label>
        <input
          className='w-[360px] h-[45px] border-2 rounded-md'
          type='email'
        />
      </div>
      <div className='flex flex-col gap-1'>
        <label className='text-slate-400 font-vollkorn' for='password'>
          Password
        </label>
        <input
          className='w-[360px] h-[45px] border-2 rounded-md'
          type='password'
        />
      </div>
      <div className='flex justify-center items-center mt-[29px]'>
        {' '}
        <button className='w-[360px] h-[37px] flex justify-center items-center text-slate-400 rounded bg-cyan-900 font-abril'>
          Sign up
        </button>
      </div>
    </div>
  );
};

export default SignUp;
