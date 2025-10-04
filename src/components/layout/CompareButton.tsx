import React from 'react'
import { IconExchange } from '../icons/IconExchange'

export const CompareButton = () => {
  return (
    <button 
      className='border border-gray-300 shadow-lg bg-white text-gray-700 flex justify-center items-center gap-1 px-4 py-2 rounded-2xl' 
      type='button'
    >
      <span>
        <IconExchange className='w-4 h-4' />
      </span>
      <p className='font-bold'>Compare</p>
    </button>
  )
}
