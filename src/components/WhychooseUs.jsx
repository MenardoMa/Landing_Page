import React from 'react'
import { wcuItems } from '../constant/data'

const WhychooseUs = () => {
  return (
    <section className='section' id='services'>
        <div className='container grid gap-10 md:grid-cols-2 md:items-center md:mx-auto'>
            {/* CONTENT */}
            <div>
                <h2 className='font-Rubik text-2xl sm:text-3xl md:text-4xl mb-2 sm:mb-4 font-bold'>Why Choose Us</h2>
                <p className='text-sm sm:text-base mb-4 w-full max-w-[500px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta delectus tenetur alias vero excepturi voluptatem!</p>
                <div className='grid gap-5 mt-10 sm:grid-cols-2'>
                   {
                        wcuItems.map((item) => (
                            <div key={item.id}>
                                <img src={item.icon} alt={item.title} loading='lazy' className='w-8 h-8 sm:w-10 sm:h-10' />
                                <div>
                                    <h4 className='font-Rubik font-bold my-2'>{item.title}</h4>
                                    <p className='text-base'>{item.text}</p>
                                </div>
                            </div>
                        ))
                   } 
                </div>
            </div>
            {/* FIGURE */}
            <figure>
                <img src="images/wcu-banner.png" alt="why choose us illustration" width={589} height={715} loading='lazy' />
            </figure>
        </div>
    </section>
  )
}

export default WhychooseUs
