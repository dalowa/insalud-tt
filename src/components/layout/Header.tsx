import React from 'react'
import { IconWorld } from '../icons/IconWorld';
import { IconExchange } from '../icons/IconExchange';
import Link from 'next/link';
import { CountryFilters } from '../country';

export const Header = () => {


  return (
    <header className='px-3 py-5 flex flex-col'>
      <div className='flex justify-between'>
        <h1 className='flex justify-center items-center gap-2'>
          <span>
            <IconWorld className='w-9 h-9 text-red-400' />
          </span>
          <p className='font-bold text-xl text-[1.35rem]'>Country Explorer</p>
        </h1>
        <div>
          <nav className='flex flex-col font-semibold border-gray-500 border rounded-lg overflow-hidden'>
            <Link className={`bg-red-400 text-white text-center px-3 py-[0.25rem]`} href={'/'}>Home</Link>
            <Link className={`text-center px-3 py-[0.25rem]`} href={'/favorites'}>Favorites</Link>
          </nav>
        </div>
      </div>

      <div>
        <div className='flex justify-center mt-4 mb-2'>
          <button className='bg-white  text-gray-700 border-[1px] flex justify-center items-center gap-1 border-gray-500 px-2 py-1 rounded-lg' type='button'>
            <span>
              <IconExchange className='w-4 h-4 ' />
            </span>
            <p className='font-bold'>Compare</p>
          </button>
        </div>
        <CountryFilters />
      </div>
    </header>
  )
}
