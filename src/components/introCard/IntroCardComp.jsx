import photographer from '../../assets/photographer.jpg';
import writer from '../../assets/writer.jpg';
import developer from '../../assets/developer.jpg';
import contentCreator from '../../assets/content-creator.jpg';

const IntroCardComp = () => {
  return (
    <div className='flex justify-center gap-20 items-center mt-[11%]'>
      <div className='relative'>
        <img
          className='w-[210px] h-[280px] border-2 rounded-lg border-stone-700'
          src={photographer}
          alt='image of photographer'
        />
        <div
          className='absolute
         bottom-[18px] bg-transparent pl-[12px]'
        >
          <p className='bg-transparent text-slate-400 font-medium'>
            Photographer
          </p>
        </div>
      </div>
      <div className='relative'>
        <img
          className='w-[210px] h-[280px] border-2 rounded-lg border-stone-700'
          src={writer}
          alt='image of photographer'
        />
        <div className='absolute bottom-[18px] bg-transparent pl-[12px]'>
          <p className='bg-transparent text-slate-400 font-medium'>Writer</p>
        </div>
      </div>
      <div className='relative'>
        <img
          className='w-[210px] h-[280px] border-2 rounded-lg border-stone-700'
          src={developer}
          alt='image of photographer'
        />
        <div className='absolute bottom-[18px] bg-transparent pl-[12px]'>
          <p className='bg-transparent text-slate-400 font-medium'>Developer</p>
        </div>
      </div>
      <div className='relative'>
        <img
          className='w-[210px] h-[280px] border-2 rounded-lg border-stone-700'
          src={contentCreator}
          alt='image of photographer'
        />
        <div className='absolute bottom-[18px] bg-transparent pl-[12px]'>
          <p className='bg-transparent text-slate-400 font-medium'>
            Content creator
          </p>
        </div>
      </div>
    </div>
  );
};

export default IntroCardComp;
