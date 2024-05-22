import logo from '../../assets/logo.png';

import { MdOutlineAccountCircle } from 'react-icons/md';

const Navbar = () => {
  return (
    <div className='flex justify-between mx-[8%] items-center mt-[2%]'>
      <div>
        <img className='w-[167px]' src={logo} alt='' />
      </div>
      <div className='flex items-center justify-center border border-zinc-700 w-[160px] h-[47px] rounded-3xl'>
        <button className='text-slate-600 text-[19px] font-medium font-abril flex items-center justify-center gap-3'>
          <MdOutlineAccountCircle className='text-[31px] text-slate-600' />
          Log in
        </button>
      </div>
    </div>
  );
};

export default Navbar;
