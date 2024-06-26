import HeroSection from '../../components/heroSection/HeroSection';
import IntroCardComp from '../../components/introCard/IntroCardComp';

import { useNavigate } from 'react-router-dom';

const IntroPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <HeroSection />
      <div>
        <IntroCardComp />
      </div>
      <div className='flex flex-col justify-center items-center mt-[11%] text-slate-600 gap-[27px]'>
        <p className='text-4xl font-vollkorn'>
          A free platform for of everyone.
        </p>
        <button
          onClick={() => {
            navigate('auth');
          }}
          className='flex justify-center items-center text-[1.2rem] font-vollkorn border-2 border-teal-700 h-[47px] w-[280px]'
        >
          Get started
        </button>
      </div>

      {/* <div className='flex mt-[4%] justify-around '>
        <div className='flex w-[280px] border-2 h-[100px] justify-center items-center'>
          <p className='text-slate-400'>
            Upload your work and get noticed by other.
          </p>
        </div>
        <div className='flex w-[280px] border-2 h-[100px] justify-center items-center'>
          <p className='text-slate-400'>
            You can like and give feedback to others.
          </p>
        </div>
      </div> */}
    </>
  );
};

export default IntroPage;
