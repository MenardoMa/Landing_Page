import { Menu, ShoppingCart, User, X } from 'lucide-react'
import React, { useEffect, useRef, useState } from 'react'
import { navItems } from '../constant/data'
import Link from './Link';

const Header = () => {

  const [openNav, setOpenNav] = useState(false)

  const headerRef = useRef(false)

  useEffect(() => {

    const headerSliderIn = function(){
        if(this.scrollY > 50){
            headerRef.current.classList.add('active')
        }else{
            headerRef.current.classList.remove('active')
        }
    }

    window.addEventListener('scroll', headerSliderIn)

    return () => {
        window.removeEventListener('scroll', headerSliderIn)
    }

  }, []);


  return (
    <header ref={headerRef} className='fixed top-0 left-0 w-full z-40 text-white'>
        <div className='container flex items-center justify-between py-6'>
            {/* LOGO */}
            <a href="" className='font-Rubik text-3xl font-bold'>Stilo</a>
            {/* MOBILE NAV */}
            <nav className={`md:hidden absolute top-0 left-0 bg-white h-screen w-full max-w-[290px] z-40 p-6 transition-transform -translate-x-[290px] duration-300 ease-in-out ${openNav ? 'translate-x-0' : ''}`}>
                <button className='block ml-auto' onClick={() => setOpenNav(false)}>
                    <X className='w-5 h-5 cursor-pointer' />
                </button>
                <ul className='mt-10 grid gap-8'>
                    {
                        navItems.map((item) => (
                            <li key={item.id}>
                                <Link label={item.label} path={item.path} />
                            </li>
                        ))
                    }
                </ul>
            </nav>
            
            <ul className='hidden md:flex md:gap-[52px]'>
                {
                    navItems.map((item) => (
                        <li key={item.id}>
                            <Link label={item.label} path={item.path} />
                        </li>
                    ))
                }
            </ul>

            <div className='flex items-center gap-3.5'>
                <button className='cursor-pointer hover:text-amber-300 duration-300 transition-colors'>
                    <ShoppingCart className='w-5 h-5' />
                </button>
                <button className='cursor-pointer hover:text-amber-300 duration-300 transition-colors'>
                    <User className='w-5 h-5' />
                </button>
                <button className='md:hidden cursor-pointer hover:text-amber-300 duration-300 transition-colors' onClick={() => setOpenNav(!openNav)}>
                    <Menu className='w-5 h-5' />
                </button>
            </div>

            {/* OVERLYNE */}
            <div className={`md:hidden fixed top-0 left-0 bg-neutral-700/50 w-full h-screen pointer-events-none opacity-0 transition-opacity ${openNav ? 'opacity-100 z-30 pointer-events-auto' : ''}`}/>

        </div>
    </header>
  )
}

export default Header

