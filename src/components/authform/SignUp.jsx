import React from 'react';

const SignUp = () => {
  return (
    <div>
      <input className='w-[310px] h-[45px] border-2' type='name' />
      <input className='w-[310px] h-[45px] border-2' type='email' />
      <input className='w-[310px] h-[45px] border-2' type='password' />
      <button>Sign up</button>
    </div>
  );
};

export default SignUp;
