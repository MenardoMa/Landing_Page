import React from 'react'
import { testimonialsItem } from '../constant/data'
import TestimonialCard from './TestimonialCard'

const Testimonials = () => {
  return (
    <section className='section pt_utility' id='testimonials'>
        <div className="container grid gap-10 lg:grid-cols-2">
            <div className='text-center lg:text-left'>
                <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-Rubik font-medium'>What developpers are saying about us.</h1>
                <p className='text-base md:text-lg text-gray-500 leading-normal mt-3 w-full max-w-[500px] mx-auto lg:mx-0'>
                  Choose the perfect plan for you needs. All plans include a 14-day free trial.
                </p>
            </div>
            {/* GRID TESTIMONIAL */}
            <div className='grid gap-5'>
                {
                  testimonialsItem.map((testimonial) => (
                      <div key={testimonial.id} className='relative overflow-hidden border border-gray-200 backdrop-blur-sm p-6 rounded-xl grid gap-5'>
                          <TestimonialCard
                            text={testimonial.text} 
                            profileImg={testimonial.profileImg} 
                            author={testimonial.author}
                            job={testimonial.job}
                          />
                      </div>
                  ))
                }
            </div>
        </div>
    </section>
  )
}

export default Testimonials
