'use client'
import { useEffect } from 'react'
import { CountryCard, CountryModal } from '../country'
import { useCountriesStore } from '@/store'

export const CountryCardsDisplay = () => {
   const { itemsPerPage,allCountries, loading,filteredCountries,handleNext, handlePrevious,isModalOpen, currentPage, totalPages, fetchCountries } = useCountriesStore()
   useEffect(() => {
      fetchCountries()
   }, [fetchCountries])

   return (
         <>
            
            <div className="flex flex-wrap max-w-[var(--max-w-container)] gap-4 px-5 justify-center">
               {loading ? (
                  <div className='font-bold'>CARGANDO...</div>
               ) : allCountries?.length === 0 ? (
                  <div className='font-bold'>NO HAY RESULTADOS</div>
               ) : (
                  filteredCountries.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage).map((co) => (
                     <CountryCard  
                        country={co}
                        key={`${co.cca3}`} />
                  ))
               )}
            </div>
            <div className=' flex justify-center gap-2'>
               <button 
               type='button' 
               onClick={() => handlePrevious()}
               className='border cursor-pointer hover:bg-black hover:text-white border-black py-2 px-3 w-28 text-center rounded-2xl font-bold'>Previo</button>

               <div className='border cursor-pointer border-white py-2 px-3 w-20 text-center rounded-2xl font-bold'>{`Page  ${currentPage}/${totalPages}`}</div>
               <button 
               type='button' 
               onClick={() => handleNext()}
               className='border cursor-pointer hover:bg-black hover:text-white border-black py-2 px-3 w-28 text-center rounded-2xl font-bold'>Siguiente</button>
            </div>
            
            {isModalOpen ? (<CountryModal />):<></>}
         </>
   )
}
