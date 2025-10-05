'use client'

import React from 'react'
import { IconExchange } from '../icons/IconExchange'
import { useCountriesStore } from '@/store'

export const RandomCountryButton = () => {
  const { allCountries, setCurrentModalCountry, setIsModalOpen } = useCountriesStore()

  const handleRandomCountry = () => {
    if (allCountries.length > 0) {
      const randomIndex = Math.floor(Math.random() * allCountries.length)
      const randomCountry = allCountries[randomIndex]
      setCurrentModalCountry(randomCountry)
      setIsModalOpen(true)
    }
  }
  return (
    <button 
      className='border cursor-pointer hover:scale-105 transition-transform border-gray-300 shadow-lg bg-white text-gray-700 flex justify-center items-center gap-1 px-4 py-2 rounded-2xl' 
      type='button'
      onClick={handleRandomCountry}
    >
      <span>
        <IconExchange className='w-4 h-4' />
      </span>
      <p className='font-bold'>Random Country</p>
    </button>
  )
}
