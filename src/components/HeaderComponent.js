import React, { useState } from 'react';

const HeaderComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className='mx-auto p-5'>
      <nav className='flex justify-between items-center w-full'>

        <div className='flex space-x-5 items-center'>
          <p className='text-sm text-black font-medium'>zobirofkir19@gmail.com</p>
          <a href='#home' className='text-sm text-black hover:text-white bg-white hover:bg-black font-bold px-10 py-2 rounded-md transition ease-in-out delay-150 md:block hidden'>
            <li className='list-none'>Copy</li>
          </a>
          <a href='#home' className='text-sm text-black hover:text-white bg-white hover:bg-black font-bold px-10 py-2 rounded-md transition ease-in-out delay-150 md:block hidden'>
            <li className='list-none'>CV</li>
          </a>
        </div>


        <div className='md:hidden' onClick={toggleMenu}>
          {!isOpen ? (

            <svg
              className='w-6 h-6 text-gray-600'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h16M4 18h16'
              ></path>
            </svg>
          ) : (

            <svg
              className='w-6 h-6 text-gray-600'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M6 18L18 6M6 6l12 12'
              ></path>
            </svg>
          )}
        </div>


        <ul
          className={`${
            isOpen ? 'block' : 'hidden'
          } absolute top-16 right-0 bg-white p-5 rounded-lg shadow-md md:flex md:space-x-5 md:static md:bg-transparent md:shadow-none md:block md:space-y-0 space-y-2`}
        >
          <li>
            <a href='#home' className='text-sm font-bold'>
              LinkedIn /
            </a>
          </li>
          <li>
            <a href='#home' className='text-sm font-bold'>
              Dribbble /
            </a>
          </li>
          <li>
            <a href='#home' className='text-sm font-bold'>
              Instagram /
            </a>
          </li>

          <a href='#home' className='md:hidden block text-sm font-bold'>
            <li className='list-none'>Copy /</li>
          </a>
          <a href='#home' className='md:hidden block text-sm font-bold'>
            <li className='list-none'>CV</li>
          </a>

        </ul>
      </nav>
    </header>
  );
};

export default HeaderComponent;
