import React from 'react'

const SliderComponent = () => {
  return (
    <div className='bg-black slider flex justify-center min-h-[50vh] md:h-[70vh] rounded-b-[90px] items-center'>
      <div className='flex flex-col space-y-4 md:space-y-6 items-center'>
        <img 
          src="https://framerusercontent.com/images/hcjBHIZgezWmanhKD6EDO43p3c.png" 
          alt='kawsarvy Avatar'
          className='w-[100px] md:w-[150px] h-auto rounded-full max-w-full' 
        />
        <div className='text-center'>
          <h1 className='font-bold text-xl md:text-3xl text-black'>
            Building digital products
            <br/>
            ...
          </h1>

          <a 
            href='#home' 
            className='bg-black text-white rounded-full flex justify-center py-2 px-4 font-bold text-sm md:text-md mt-4 transition-transform hover:scale-105'
          >
            Latest Show
          </a>
        </div>
      </div>
    </div>
  )
}

export default SliderComponent
