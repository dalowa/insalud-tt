'use client'

import { useCountriesStore } from '@/store'
import React from 'react'

export const CountryCleanButton = () => {

   const { resetFilters } = useCountriesStore()

  return (
      <div className=' w-full flex justify-center sm:justify-end'>
         <button type='button' onClick={resetFilters} className='cursor-pointer hover:scale-90 transition-transform border border-red-400 shadow-lg shadow-gray-400 bg-red-400 text-white px-4 py-2 rounded-xl font-black'>Clean filters</button>
      </div>
  )
}
