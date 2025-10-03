import React from 'react'
import { IconWorld } from '../icons/IconWorld';
import { IconExchange } from '../icons/IconExchange';
import { CountryFilters } from '../country';
import { NavBar } from './NavBar';

export const Header = () => {
  return (
    <header className='px-3 py-5 flex flex-col sm:px-5 max-w-[var(--max-w-container)] mx-auto'>
      <div className='flex justify-between'>
        <h1 className='flex justify-center items-center gap-2'>
          <span>
            <IconWorld className='w-9 h-9 text-red-400' />
          </span>
          <p className='font-bold text-xl text-[1.35rem]'>Country Explorer</p>
        </h1>
        <div>
          <NavBar />
        </div>
      </div>

      <div>
        <div className='flex justify-center sm:justify-start mt-4 mb-2'>
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
