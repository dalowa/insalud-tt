import { formatPopulation } from '@/lib/utils/format'
import { Country } from '@/types/countriesAPI-type'
import Image from 'next/image'
import React from 'react'

interface CountryCardProps {
   country: Country
   setModalIsOpen: (b:boolean) => void
   setCurrentModalCountry: (c: Country) => void
}

export function CountryCard({country, setModalIsOpen, setCurrentModalCountry} : CountryCardProps) {
   const handleClickModal = (c: Country) => {
      setModalIsOpen(true)
      setCurrentModalCountry(c)
   }
  return (
    <div
      className={`border border-gray-400 relative w-full md:w-52 xl:w-80 px-5 py-8 justify-between flex flex-col items-start rounded-lg cursor-pointer`}
      onClick={() => handleClickModal(country)}
   >
      
      <div className='w-20 h-12 relative overflow-hidden'>
         <Image 
            src={country.flags.png ?? country.flags.svg}
            alt={`Country flag of ${country.name.common}`}
            fill
            className=""
         />
      </div>
      <div className="justify-evenly w-full [&>p]:my-2">
         <p className="font-bold text-start text-xl tracking-wider">{country.name.common}</p>
         <p className="text-sm text-start md:text-base xl:text-xl px-2 bg-gray-300 rounded-lg inline">{`${country.region}`}</p>
         <p className="text-sm text-start md:text-base xl:text-xl">{`Aprox. population: ${formatPopulation(country.population)}`}</p>
      </div>
   </div>
  )
};
