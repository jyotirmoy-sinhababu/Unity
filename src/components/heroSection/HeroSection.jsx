import photoOne from '../../assets/photoOne.svg';
import photoTwo from '../../assets/photoTwo.svg';
import photoThree from '../../assets/photoThree.svg';

import ReactParallaxTilt from 'react-parallax-tilt';

const HeroSection = () => {
  return (
    <>
      <div className='flex justify-between items-center absolute mx-[8%] mt-[4%]'>
        <div className='w-[40%] ]'>
          <p className='text-slate-400 sm:text-[4rem] text-[66px]  font-semibold leading-[5rem] font-vollkorn whitespace-nowrap'>
            Simple interface
            <br /> to showcase <br /> your work.
          </p>
        </div>{' '}
        <div className='w-[40%] bg-transparent'>
          <ReactParallaxTilt>
            <img
              className='w-[50%] relative top-[40px] left-[200px] z-10'
              src={photoOne}
              alt='first photo'
            />
            <img
              className='w-[45%] relative left-[340px] z-30'
              src={photoTwo}
              alt='first photo'
            />
            <img
              className='w-[45%] relative bottom-[180px] left-[100px] z-50'
              src={photoThree}
              alt='first photo'
            />
          </ReactParallaxTilt>
        </div>
      </div>{' '}
    </>
  );
};

export default HeroSection;
