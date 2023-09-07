import {headerLogo}   from '../assets/images';

const Navbar = () => {
  return (
    <header>
     <nav className='text-sm sm:text-teal-100'>
      <a href="/">
        <img src={headerLogo} alt="" />
      </a>
     </nav>
    </header>
  );
};

export default Navbar;