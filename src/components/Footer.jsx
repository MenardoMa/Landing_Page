import React from 'react'
import { footerItems } from '../constant/data'

const Footer = () => {
  return (
    <footer className='py-6 sm:py-8 md:py-10 lg:py-14'>
        <div className='container'>
            <div className='grid gap-5 sm:grid-cols-2 md:grid-cols-[1fr_0.6fr_0.8fr] lg:grid-cols-[1fr_0.6fr_0.6fr_0.6fr_0.6fr]'>
                <div>
                    <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold font-Rubik text-black mb-2'>Stilo</h1>
                    <p className='w-full max-w-[500px] text-sm sm:text-base font-Rubik text-gray-400'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Pariatur vitae aspernatur distinctio dolorum, quaerat voluptate magnam,
                        ab modi deserunt autem ea numquam ? 
                    </p>
                </div>
                {
                    footerItems.map((item) => (
                        <ul key={item.id} className='grid items-center gap-0.5 lg:gap-0'>
                            <div className='uppercase text-sm font-medium text-black font-Rubik'>{item.title}</div>
                            {
                                item.links.map((link, keys) => (
                                    <li key={keys} className='text-gray-600 lg:text-sm hover:text-amber-400 transition-colors duration-300'>
                                        <a href={link.label}>{link.label}</a>
                                    </li>
                                ))
                            }
                        </ul>
                    ))
                }
            </div>
            <p className='text-gray-400 text-sm font-Rubik pt-4 mt-4 sm:mt-6 sm:pt-6 border-t border-gray-300 '>
                &copy;{ new Date().getFullYear() } by Stilo Furnitures. All rights reserved.
            </p>
        </div>
    </footer>
  )
}

export default Footer
