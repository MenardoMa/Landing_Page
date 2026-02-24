import React from 'react'

const TestimonialCard = ({text, author, profileImg, job }) => {
  return (
    <>
        <div className='flex items-start gap-5'>
            <div className='font-Rubik font-bold text-2xl md:text-3xl primaryColor flex-shrink-0 '>"</div>
            <p className='text-base sm:text-lg leading-relaxed'>{text}</p>
        </div>
        <div className='flex items-center gap-3'>
            <img 
            src={profileImg} 
            alt={author} 
            width={70}
            height={70}
            loading='lazy'
            className='rounded-full object-cover aspect-square'
            />
            <div>
                <h3 className='font-Rubik font-medium'>{author}</h3>
                <p className='text-gray-300 text-sm font-normal'>{job}</p>
            </div>
        </div>  
    </>
  )
}

export default TestimonialCard
