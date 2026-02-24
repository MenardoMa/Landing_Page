import { Heart, ShoppingBag, Star } from 'lucide-react'
import React, { useState } from 'react'

const ProductCard = ({name, price, rating, imgUrl}) => {

  const [favorite, setFavorite] = useState(false)

  return (
    <div className='flex flex-col h-full group'>
        {/* CARD IMAGE */}
        <div className='relative p-6 overflow-hidden flex-1'>
            <img 
                src={imgUrl} 
                alt={name} 
                width={300} 
                height={300} 
                loading='lazy' 
                className='w-full h-auto object-cover transition-transform group-hover:scale-105' 
            />
            <div className='absolute top-4 right-4 left-auto grid gap-3'>
                <button className=' bg-white/90 rounded-full shadow-sm transition-all p-2 cursor-pointer' aria-label='add to favorites'>
                    <Heart
                        stroke={favorite ? `#f9bf29` : '#555'}
                        fill={favorite ? `#f9bf29` : 'transparent'}
                        className='transition-colors w-5 h-5'
                        onClick={() => setFavorite(!favorite)}
                    />
                </button>
                <button className=' bg-white/90 rounded-full shadow-sm transition-all p-2 cursor-pointer' aria-label='add'>
                    <ShoppingBag
                        stroke='#555'
                        className='transition-colors w-5 h-5'
                    />
                </button>
            </div>
        </div>
        {/* CARD CONTENT */}
        <div className='p-4 border-t border-gray-300/50'>
            <h3 className='font-Rubik font-medium mb-1'>{name}</h3>
            <div className='mb-2 flex items-center gap-2'>
                <Star
                    size={16}
                    fill='#f9bf29'
                    stroke='#f9bf29'
                />
                <span className='text-gray-600 text-sm'>
                    {rating.toFixed(1)}{' '} 
                    <span>rating</span>
                </span>
            </div>
            <p className='font-semibold primaryColor font-Rubik'>
                ${price.toFixed(2)}
            </p>
        </div>
    </div>
  )
}

export default ProductCard
