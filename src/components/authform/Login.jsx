import React from 'react';

const Login = () => {
  return (
    <div className='flex flex-col gap-1'>
      <div className='flex flex-col gap-1'>
        <label className='text-slate-600 font-vollkorn' htmlFor='email'>
          Email
        </label>
        <input
          className='w-[360px] h-[45px] border-2 border-zinc-800 rounded-md text-slate-700 pl-3'
          type='email'
        />
      </div>
      <div className='flex flex-col gap-1'>
        <label className='text-slate-600 font-vollkorn' htmlFor='email'>
          Password
        </label>
        <input
          className='w-[360px] h-[45px] border-2 border-zinc-800 rounded-md text-slate-700 pl-3'
          type='password'
        />
      </div>

      <div className='flex justify-center items-center mt-[29px]'>
        <button className='w-[360px] h-[37px] flex justify-center items-center text-slate-400 rounded bg-cyan-900 font-abril'>
          Log in
        </button>
      </div>
    </div>
  );
};

export default Login;
