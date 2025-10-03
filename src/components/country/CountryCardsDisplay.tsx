'use client'

import { Country } from '@/types/countriesAPI-type'
import { CountryCard, CountryModal } from '../country'
import { useCountries, useCountryFilters, useModalCountry,usePagination } from '@/hooks'

export const CountryCardsDisplay = () => {
  const { allCountries, loading } = useCountries()
  const {...props} = useCountryFilters(allCountries)
  const {currentModalCountry, isModalOpen, setCurrentModalCountry, setIsModalOpen} = useModalCountry()
  const {currentItems, handleNext, handlePrevious, currentPage, totalPages} = usePagination(8,props.filteredCountries)
  return (
      <>
         
         <div className="flex flex-wrap max-w-[var(--max-w-container)] gap-4 px-5 justify-center">
            {loading ? (
               <div className='font-bold'>CARGANDO...</div>
            ) : props.filteredCountries?.length === 0 ? (
               <div className='font-bold'>NO HAY RESULTADOS</div>
            ) : (
               currentItems.map((co, i) => (
                  <CountryCard 
                     setCurrentModalCountry={setCurrentModalCountry}
                     setModalIsOpen={setIsModalOpen}  
                     country={co}
                     key={`${i}+${co.name.common}`} />
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
         
         {isModalOpen ? (<CountryModal setIsModalOpen={setIsModalOpen} country={currentModalCountry as Country} />):<></>}
      </>
  )
}
