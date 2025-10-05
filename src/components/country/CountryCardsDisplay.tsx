'use client'
import { useEffect } from 'react'
import { CountryCard, CountryModal, CountryPagination } from '../country'
import { useCountriesStore } from '@/store'
import { LoadingSpinner } from '../common/LoadingSpinner'

export const CountryCardsDisplay = () => {
   const { itemsPerPage, loading, filteredCountries, isModalOpen, currentPage, fetchCountries } = useCountriesStore()
   useEffect(() => {
      fetchCountries()
   }, [fetchCountries])

   return (
      <>
         <div className="flex flex-wrap gap-4 px-5 justify-center">
            {loading ? (
               <LoadingSpinner />
               ) : filteredCountries?.length === 0 ? (
                  <div className='font-bold h-[] flex justify-center items-center text-3xl text-red-400'>NO HAY RESULTADOS</div>
               ) : (
                  filteredCountries.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage).map((co) => (
                     <CountryCard  
                        country={co}
                        key={`${co.cca3}`} />
                  ))
               )}
            </div> 
            <div></div>  
            <CountryPagination />
            
            {isModalOpen ? (<CountryModal />):<></>}
         </>
   )
}
