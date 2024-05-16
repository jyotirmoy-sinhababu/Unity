import HeroSection from '../../components/heroSection/HeroSection';

const IntroPage = () => {
  return (
    <>
      <HeroSection />
      <div className='flex flex-col justify-center items-center mt-[44%] text-slate-400 gap-8'>
        <p className='text-4xl font-vollkorn'>
          A free platform for of everyone.
        </p>
        <button className='text-2xl font-vollkorn border-2 border-teal-700 h-[47px] w-[280px]'>
          Get started -it's for free.
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
