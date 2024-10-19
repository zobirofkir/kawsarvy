import React from 'react';

const BrandComponent = () => {
  return (
    <div className='mt-10 bg-white overflow-hidden p-[100px]'>
      <h3 className='text-center font-bold text-black text-2xl'>Brands</h3>
      <div className='marquee mt-20'>
        <div className='flex flex-nowrap justify-start items-center gap-[150px] md:gap-[200px]'>
          <img 
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/HP_logo_2012.svg/2048px-HP_logo_2012.svg.png' 
            alt='hp brand' 
            className='w-[80px] h-[80px] md:w-[100px] md:h-[100px] object-contain hover:scale-110 transition-transform duration-300 ease-in-out'
          />
          <img 
            src='https://cdn.worldvectorlogo.com/logos/lenovo-2.svg' 
            alt='lenovo brand' 
            className='w-[80px] h-[80px] md:w-[100px] md:h-[100px] object-contain hover:scale-110 transition-transform duration-300 ease-in-out'
          />
          <img 
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Acer_2011.svg/1024px-Acer_2011.svg.png' 
            alt='acer brand' 
            className='w-[80px] h-[80px] md:w-[100px] md:h-[100px] object-contain hover:scale-110 transition-transform duration-300 ease-in-out hidden md:block'
          />
          <img 
            src='https://static.vecteezy.com/system/resources/previews/019/767/925/non_2x/asus-logo-asus-icon-transparent-free-png.png' 
            alt='asus brand' 
            className='w-[80px] h-[80px] md:w-[100px] md:h-[100px] object-contain hover:scale-110 transition-transform duration-300 ease-in-out hidden md:block'
          />

          {/* Repeat the images to create a seamless effect */}
          <img 
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/HP_logo_2012.svg/2048px-HP_logo_2012.svg.png' 
            alt='hp brand' 
            className='w-[80px] h-[80px] md:w-[100px] md:h-[100px] object-contain hover:scale-110 transition-transform duration-300 ease-in-out'
          />
          <img 
            src='https://cdn.worldvectorlogo.com/logos/lenovo-2.svg' 
            alt='lenovo brand' 
            className='w-[80px] h-[80px] md:w-[100px] md:h-[100px] object-contain hover:scale-110 transition-transform duration-300 ease-in-out'
          />
          <img 
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Acer_2011.svg/1024px-Acer_2011.svg.png' 
            alt='acer brand' 
            className='w-[80px] h-[80px] md:w-[100px] md:h-[100px] object-contain hover:scale-110 transition-transform duration-300 ease-in-out hidden md:block'
          />
          <img 
            src='https://static.vecteezy.com/system/resources/previews/019/767/925/non_2x/asus-logo-asus-icon-transparent-free-png.png' 
            alt='asus brand' 
            className='w-[80px] h-[80px] md:w-[100px] md:h-[100px] object-contain hover:scale-110 transition-transform duration-300 ease-in-out hidden md:block'
          />
        </div>
      </div>
    </div>
  );
};

export default BrandComponent;
