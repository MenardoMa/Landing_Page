import React from 'react'
import { popularProducts } from '../constant/data'
import ProductCard from './ProductCard'
import Button from './Button'

const PopularProducts = () => {
  return (
    <section className='section pt_utility' id='products'>
        <div className='container'>
            <header className='text-center'>
                <h2 className='font-Rubik font-bold text-2xl sm:text-3xl md:text-4xl'>Popular products</h2>
                <p className='mx-auto mt-3 w-full max-w-[500px]'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio libero fugiat cumque.
                </p>
            </header>
            <div className='grid gap-5 sm:grid-cols-2 lg:grid-cols-3 mt-10 md:mt-20'>
                {
                    popularProducts.map((product) => (
                        <div key={product.id} className='bg-gray-200/50'>
                            <ProductCard 
                                id={product.id}
                                name={product.name}
                                price={product.price}
                                rating={product.rating} 
                                imgUrl={product.imgUrl} 
                            />
                        </div>
                    ))
                }
            </div>
            
            <div className='w-full h-auto flex items-center justify-center mt-8 md:mt-12'>
                <Button label='All Products' className='primary-btn cursor-pointer' />
            </div>

        </div>
    </section>
  )
}

export default PopularProducts
