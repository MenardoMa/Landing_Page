import React from 'react'

const BlogCards = ({imgUrl, title, text, postDate}) => {
  return (
    <>
        <div className='overflow-hidde w-auto h-auto overflow-hidden'>
            <img 
                src={imgUrl}
                alt={title}
                loading='lazy'
                className='w-full object-cover transition-transform duration-300 hover:scale-105'
            />
        </div>
        <div>
            <h3 className='font-medium font-Rubik pt-3 text-base hover:text-blue-400 transition-colors duration-300'>
                <a href="" className='inline-block'>{title}</a>
            </h3>                       
            <p className='text-gray-500 text-base pt-1'>{text}</p>                       
            <p className='text-sm'>{postDate}</p>                       
        </div>
    </>
  )
}

export default BlogCards
