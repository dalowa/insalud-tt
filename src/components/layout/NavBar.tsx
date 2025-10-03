'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export const NavBar = () => {
   const direction = usePathname()

   return (
      <nav className='flex flex-col font-semibold border border-red-400 shadow-lg shadow-gray-400 rounded-lg overflow-hidden'>
         <Link className={`${direction === '/' ? 'bg-red-400 text-white' : ''} text-center px-3 py-[0.25rem]`} href={'/'}>Home</Link>
         <Link className={`${direction === '/favorites' ? 'bg-red-400 text-white' : ''} text-center px-3 py-[0.25rem]`} href={'/favorites'}>Favorites</Link>
      </nav>
   )
}
