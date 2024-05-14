import logo from '../../assets/logo.png';

import { MdOutlineAccountCircle } from 'react-icons/md';

const Navbar = () => {
  return (
    <div className='flex justify-between mx-[8%] items-center mt-[2%]'>
      <div>
        <img src={logo} alt='' />
      </div>
      <div className='flex items-center justify-center gap-3 border-2 w-[160px] h-[47px] rounded-3xl'>
        <MdOutlineAccountCircle className='text-[26px] text-slate-400' />
        <button className='text-slate-400 text-[19px] font-medium font-abril'>
          Sign in
        </button>
      </div>
    </div>
  );
};

export default Navbar;
