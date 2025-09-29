'use client'

import { Country } from '@/types/countriesAPI-type'
import React, { useEffect, useState } from 'react'
import { CountryCard } from './CountryCard'
import { useCountries, useCountryFilters, useModalCountry } from '@/hooks'
import { CountryFilters } from './CountryFilters'
import { CountryModal } from './CountryModal'

export const CountryCardsDisplay = () => {
  const [currentCountriesList, setCurrentCountriesList] = useState<Country[] | undefined >(undefined)
  const { allCountries, loading } = useCountries()
  const {...props} = useCountryFilters(allCountries)
  const {currentModalCountry, isModalOpen, setCurrentModalCountry, setIsModalOpen} = useModalCountry()

  useEffect(() => {
   setCurrentCountriesList(allCountries)
  },[allCountries])

  return (
      <>
         <CountryFilters 
            onSearch={() => setCurrentCountriesList(props.filteredCountries)}
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
            ) : currentCountriesList?.length === 0 ? (
               <div className='font-bold'>NO HAY RESULTADOS</div>
            ) : (
               currentCountriesList?.map((co, i) => (
                  <CountryCard 
                     setCurrentModalCountry={setCurrentModalCountry}
                     setModalIsOpen={setIsModalOpen}  
                     country={co} 
                     key={`${i}+${co.name.common}`} />
               ))
            )}
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
