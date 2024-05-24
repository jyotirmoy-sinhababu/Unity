import React from 'react';

const Footer = () => {
  return (
    <div className='h-[311px] flex items-center justify-center'>
      <div className='flex justify-center items-center'>
        <p className='font-vollkorn'>Created by -</p>
        <a
          className='font-vollkorn text-teal-900 font-bold'
          href='https://golden-chimera-704a3f.netlify.app'
        >
          Jyotirmoy
        </a>
      </div>
    </div>
  );
};

export default Footer;
