'use client'

import { Country } from '@/types/countriesAPI-type'
import { CountryCard } from './CountryCard'
import { useCountries, useCountryFilters, useModalCountry,usePagination } from '@/hooks'
import { CountryFilters } from './CountryFilters'
import { CountryModal } from './CountryModal'

export const CountryCardsDisplay = () => {
  const { allCountries, loading } = useCountries()
  const {...props} = useCountryFilters(allCountries)
  const {currentModalCountry, isModalOpen, setCurrentModalCountry, setIsModalOpen} = useModalCountry()
  const {currentItems, handleNext, handlePrevious} = usePagination(8,props.filteredCountries)
  return (
      <>
         <CountryFilters 
            inputSearch={props.inputSearch}
            setInputSearch={props.setInputSearch}
            selectedRegion={props.selectedRegion}
            setSelectedRegion={props.setSelectedRegion}
            minPopulation={props.minPopulation}
            maxPopulation={props.maxPopulation}
            setMaxPopulation={props.setMaxPopulation}
            setMinPopulation={props.setMinPopulation}
         />
         <div className="flex flex-wrap gap-4 justify-center max-w-[1200px] xl:mx-auto">
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
            className='border cursor-pointer hover:bg-black hover:text-white border-black py-2 px-3 w-40 text-center rounded-2xl font-bold'>Previo</button>
            <button 
            type='button' 
            onClick={() => handleNext()}
            className='border cursor-pointer hover:bg-black hover:text-white border-black py-2 px-3 w-40 text-center rounded-2xl font-bold'>Siguiente</button>
         </div>
         {isModalOpen ? (<CountryModal setIsModalOpen={setIsModalOpen} country={currentModalCountry as Country} />):<></>}

         {/* <CountryModalBox 
            currentModalCountry={currentModalCountry as Country}
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}

         /> */}
      </>
  )
}
