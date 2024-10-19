import React from 'react';

const FooterComponent = () => {
  return (
    <footer className="slider rounded-t-[10px] text-white py-8 mt-10 space-y-20">
      <h1 className='text-black text-center font-bold'>
        Collaboration with brands and agencies to create impactful results
      </h1>
      <h4 className='text-white font-bold text-center flex justify-center items-center'>
        <hr className='w-[30%] border-t-2 border-white' />
        <p className='bg-white px-10 py-2 rounded-md text-black mx-5 -rotate-[8deg]'>Services</p>
        <hr className='w-[30%] border-t-2 border-white' />
      </h4>

      {/* Services Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start space-y-6 md:space-y-0">
          <div className="flex flex-col space-y-2">
            <h5 className='text-black font-bold'>Our Services</h5>
            <ul className="list-disc list-inside text-black">
              <li><a href="#service1" className="hover:text-gray-400 transition duration-300">Backend</a></li>
              <li><a href="#service2" className="hover:text-gray-400 transition duration-300">Fullstack</a></li>
              <li><a href="#service3" className="hover:text-gray-400 transition duration-300">Frontend</a></li>
              <li><a href="#service4" className="hover:text-gray-400 transition duration-300">Api</a></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="flex flex-col space-y-2">
            <h5 className='text-black font-bold'>Contact Us</h5>
            <p className="text-black">Email: <a href="mailto:kawsarvy.design@gmail.com" className="hover:text-gray-400 transition duration-300">kawsarvy.design@gmail.com</a></p>
            <p className="text-black">Phone: <a href="tel:+880 130 35 36 185" className="hover:text-gray-400 transition duration-300">+880 130 35 36 185</a></p>
          </div>
        </div>
      </div>

      {/* Bottom Links and Social Media Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          {/* Left Section: Links */}
          <div className="flex space-x-6">
            <a href="#home" className="text-sm hover:text-gray-400 transition duration-300 text-black">Home</a>
            <a href="#home" className="text-sm hover:text-gray-400 transition duration-300 text-black">About</a>
            <a href="#home" className="text-sm hover:text-gray-400 transition duration-300 text-black">Services</a>
            <a href="#home" className="text-sm hover:text-gray-400 transition duration-300 text-black">Contact</a>
          </div>

          {/* Center Section: Social Media */}
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition duration-300">
              <img src="https://cdn-icons-png.flaticon.com/512/145/145802.png" alt="Facebook" className="w-6 h-6" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition duration-300">
              <img src="https://cdn-icons-png.flaticon.com/512/145/145812.png" alt="Twitter" className="w-6 h-6" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition duration-300">
              <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram" className="w-6 h-6" />
            </a>
          </div>

          <div className="text-sm text-black">
            © {new Date().getFullYear()} Zobir Ofkir. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterComponent;
