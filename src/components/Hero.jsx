import React from 'react'
import Button from './Button'

const Hero = () => {
  return (
    <section className='section primaryBg' id='home'>
      <div className='container grid gap-14 md:grid-cols-2 md:items-center'> 
          {/* Hero Content */}
          <div className='text-center md:text-left'>
            <h1 className='font-Rubik text-4xl text-white sm:text-5xl lg:text-7xl'>Redesign Your Space, Refine Your Look.</h1>
            <p className='text-white mt-5 mb-8 max-w-[500px] mx-auto md:mx-0'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere libero numquam nisi, illum laboriosam ea!
            </p>
            {/* Hero Button */}
            <div className='flex items-center justify-center flex-col md:flex-row md:justify-start gap-4 md:gap-6'>
                <Button label='Shop Now' aria-label='Shop Now' className='primary-btn cursor-pointer' />
                <Button label='Explore' aria-label='Explore' className='secondary-btn cursor-pointer' />
            </div>
          </div>
          {/* Hero Banner */}
          <figure>
            <img src="images/hero-banner.png" alt="Modern interior design showcase" loading='lazy' />
          </figure>
      </div>
    </section>
  )
}

export default Hero
