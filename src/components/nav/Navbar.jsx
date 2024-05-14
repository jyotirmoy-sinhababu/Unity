import logo from '../../assets/logo.png';

const Navbar = () => {
  return (
    <div>
      <div>
        <img src={logo} alt='' />
      </div>
      <div>
        <button>Log in</button>
      </div>
    </div>
  );
};

export default Navbar;
