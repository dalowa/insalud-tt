import { millonesOMiles } from '@/lib/millones-o-miles'
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
      console.log("Click detected")
      
      setModalIsOpen(true)
      setCurrentModalCountry(c)
   }
  return (
    <div
      className={`border border-black w-40 h-70 md:w-52 xl:w-64 xl:h-[28rem] flex flex-col gap-3 bg-gray-300 rounded-2xl`}
      onClick={() => handleClickModal(country)}
   >
      <h3 className="rounded-t-2xl font-bold text-center bg-black text-white py-2 leading-4 px-0.5 xl:py-5 xl:text-2xl">{country.name.common}</h3>
      <Image 
      src={country.flags.png ?? country.flags.svg}
      alt={`Country flag of ${country.name.common}`}
      width={250}
      height={0o0}
      className="px-2"
      />
      <div className="flex flex-col justify-evenly h-full">
      <h4 className="text-sm text-center px-2 md:text-base xl:text-xl">{`${country.region}`}</h4>
      <h5 className="text-sm text-center px-2 md:text-base xl:text-xl">{`${millonesOMiles(country.population)}`}</h5>
      </div>

   </div>
  )
};
