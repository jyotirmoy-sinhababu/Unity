import logo from '../../assets/logo.png';

import { MdOutlineAccountCircle } from 'react-icons/md';

import { useNavigate } from 'react-router-dom';

import { useSelector } from 'react-redux';

const Navbar = () => {
  const authState = useSelector((state) => state.authReducer.user);
  const navigate = useNavigate();
  return (
    <div className='flex justify-between mx-[8%] items-center mt-[2%]'>
      <div>
        <img className='w-[167px]' src={logo} alt='' />
      </div>

      <div className='flex items-center justify-center border border-zinc-700 w-[160px] h-[47px] rounded-3xl'>
        {authState ? (
          <button
            className='text-slate-600 text-[19px] font-medium font-abril flex items-center justify-center gap-3'
            onClick={() => {}}
          >
            <MdOutlineAccountCircle className='text-[31px] text-slate-600' />
            My Profile
          </button>
        ) : (
          <button
            onClick={() => {
              navigate('/auth');
            }}
            className='text-slate-600 text-[19px] font-medium font-abril flex items-center justify-center gap-3'
          >
            <MdOutlineAccountCircle className='text-[31px] text-slate-600' />
            Log in
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
