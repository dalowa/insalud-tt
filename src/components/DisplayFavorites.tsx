'use client'

import { Country } from '@/types/countriesAPI-type';
import React, { useEffect, useState } from 'react'
import { CountryCard } from './country/CountryCard';
import { useModalCountry } from '@/hooks';
import { CountryModal } from './country';
import { getFavorites } from '@/lib/utils/localStorage';

export const DisplayFavorites = () => {

   const [favorites, setFavorites] = useState<Country[]>()
   const { isModalOpen} = useModalCountry()

   useEffect(() => {
      setFavorites(getFavorites())
      return () => {
         
      };
   }, [isModalOpen]);

  return (
   <>
    <div className='flex flex-wrap gap-4 justify-center '>
      {favorites?.map((co, i) => (
         <CountryCard 
            country={co} 
            key={`${i}+${co.name.common}`} />
      ))}

    </div>
    {isModalOpen ? (<CountryModal />):<></>}
   </>
  )
}
