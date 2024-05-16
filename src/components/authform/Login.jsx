import React from 'react';

const Login = () => {
  return (
    <div className='flex flex-col gap-5'>
      <input className='w-[360px] h-[45px] border-2 rounded-md' type='email' />
      <input
        className='w-[360px] h-[45px] border-2 rounded-md'
        type='password'
      />
      <div className='flex justify-center items-center mt-[12px]'>
        <button className='w-[360px] h-[37px] flex justify-center items-center text-slate-400 rounded bg-cyan-900 font-abril'>
          Log in
        </button>
      </div>
    </div>
  );
};

export default Login;
