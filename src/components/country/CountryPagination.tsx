import { useCountriesStore } from '@/store'
import React from 'react'

export const CountryPagination = () => {
  const { currentPage, totalPages, handleNext, handlePrevious } = useCountriesStore()

  return (
    <div className={`flex justify-center gap-2 my-5 ${totalPages <= 1 ? 'hidden' : ''}`}>
      <button 
        type='button' 
        onClick={() => handlePrevious()}
        className='cursor-pointer w-32 font-black text-red-400 border-2 hover:bg-red-400 hover:text-white border-red-400 py-1 px-3 text-center rounded-2xl'>Previo</button>

        <div className=' text-sm lg:text-base py-2 text-center rounded-2xl font-bold'>{`Page  ${currentPage}/${totalPages}`}</div>
        
        <button 
        type='button' 
        onClick={() => handleNext()}
        className='cursor-pointer w-32 font-black text-red-400 border-2 hover:bg-red-400 hover:text-white border-red-400 py-1 px-3 text-center rounded-2xl'>Siguiente</button>
    </div>
  )
}
