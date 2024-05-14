import logo from '../../assets/logo.png';

const Navbar = () => {
  return (
    <div className='flex justify-between mx-[8%] items-center mt-[2%]'>
      <div>
        <img src={logo} alt='' />
      </div>
      <div className='flex gap-3'>
        <button className='text-slate-400 text-[23px] font-medium font-merienda'>
          Log in
        </button>
      </div>
    </div>
  );
};

export default Navbar;
