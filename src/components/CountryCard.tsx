import { millonesOMiles } from '@/lib/millones-o-miles'
import { Country } from '@/types/countriesAPI-type'
import Image from 'next/image'
import React from 'react'

interface CountryCardProps {
   country: Country
}

export function CountryCard({country} : CountryCardProps) {
  return (
    <div
      className={`border border-black w-40 h-70 flex flex-col gap-3 bg-gray-900/50 rounded-2xl`}
   >
      <h3 className="rounded-t-2xl font-bold text-center bg-black text-white py-2 leading-4 px-0.5">{country.name.common}</h3>
      <Image 
      src={country.flags.png ?? country.flags.svg}
      alt={`Country flag of ${country.name.common}`}
      width={250}
      height={0o0}
      className="px-2"
      />
      <div className="flex flex-col justify-evenly h-full">
      <h4 className="text-sm text-center px-2">{`${country.region}`}</h4>
      <h5 className="text-sm text-center px-2">{`${millonesOMiles(country.population)}`}</h5>
      </div>

   </div>
  )
};
