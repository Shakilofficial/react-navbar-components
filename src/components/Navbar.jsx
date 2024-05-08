import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const closeNav = () => {
    setNav(false);
  };

  const navItems = [
    { id: 1, text: 'Home', path: '/' },
    { id: 2, text: 'Company', path: '/company' },
    { id: 3, text: 'Resources', path: '/resources' },
    { id: 4, text: 'About', path: '/about' },
    { id: 5, text: 'Contact', path: '/contact' },
  ];

  return (
    <nav className='bg-gradient-to-r from-[#E1ACAC] to-[#A87676] shadow-lg'>
      <div className='container mx-auto px-4 py-6 flex justify-between items-center'>
        <Link to='/' className='text-xl font-bold text-white'>
          REACT.
        </Link>

        {/* Desktop Navigation */}
        <ul className='hidden md:flex space-x-6'>
          {navItems.map(item => (
            <li key={item.id}>
              <Link
                to={item.path}
                className='text-white font-medium hover:text-gray-200 transition-colors duration-300'
              >
                {item.text}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Navigation Icon */}
        <div className='md:hidden'>
          <button onClick={handleNav} className='text-white focus:outline-none'>
            {nav ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {nav && (
        <div className='md:hidden bg-[#FFEFEF] text-center'>
        <ul className='py-2'>
          {navItems.map(item => (
            <li key={item.id} className=''>
              <Link
                to={item.path}
                onClick={closeNav}
                className='block px-4 py-2 text-gray-800 font-medium rounded-md'
              >
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      
      )}
    </nav>
  );
};

export default Navbar;
