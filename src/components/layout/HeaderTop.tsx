import React from 'react'
import { IconWorld } from '../icons/IconWorld'
import { NavBar } from './NavBar'

export const HeaderTop = () => {
  return (
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
  )
}
