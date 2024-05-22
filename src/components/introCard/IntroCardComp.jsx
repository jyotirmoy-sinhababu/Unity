import photographer from '../../assets/photographer.jpg';
import writer from '../../assets/writer.jpg';
import developer from '../../assets/developer.jpg';

const IntroCardComp = () => {
  return (
    <div>
      <div>
        <img src={photographer} alt='image of photographer' />
        <div>
          <p>Photographer</p>
        </div>
      </div>
      <div>
        <img src={writer} alt='image of photographer' />
        <div>
          <p>Writer</p>
        </div>
      </div>
      <div>
        <img src={developer} alt='image of photographer' />
        <div>
          <p>Developer</p>
        </div>
      </div>
    </div>
  );
};

export default IntroCardComp;
