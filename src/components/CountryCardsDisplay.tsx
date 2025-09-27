'use client'

import { Country } from '@/types/countriesAPI-type'
import React, { useEffect, useState } from 'react'
import { CountryCard } from './CountryCard'
import { httpClientPlugin } from '@/lib/http-client.plugin'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"


export const CountryCardsDisplay = () => {


  const [allCountries, setAllCountries] = useState<Country[]>([])
  const [currentCountriesList, setCurrentCountriesList] = useState<Country[] | undefined >(undefined)
  const [inputSearch, setInputSearch] = useState<string>("")
  const [selectedRegion, setSelectedRegion] = useState<string>("All")
  const [loading, setLoading] = useState(true);



  const URL_COUNTRIES_API = 'https://restcountries.com/v3.1/all?fields=name,cca3,flags,region,population,capital';

  

   const requestCountriesList = async () => {
      setLoading(true);
      const countriesList = await httpClientPlugin.get(URL_COUNTRIES_API);
      setAllCountries(countriesList)
      setCurrentCountriesList(countriesList);

      setLoading(false);
   }

  const handleSelect = (value: string) => {
    setSelectedRegion(value);
    
    if (value === "All") {
      setCurrentCountriesList(allCountries);
    } else {
      setCurrentCountriesList(
        allCountries.filter(country => country.region === value)
      );
    }
  };

   const onClickSearch = () => {
      if(inputSearch.trim() == ""){
         setCurrentCountriesList(allCountries)
      }else {
         setCurrentCountriesList(currentCountriesList?.filter(e => e.name.common.includes(inputSearch.trim())))
      }
      
   }



   useEffect(() => {
         requestCountriesList() // Solo hacer la petición
      }, []); // Solo una vez al montar

   useEffect(() => {
         setCurrentCountriesList(allCountries) // Actualizar cuando allCountries cambie
      }, [allCountries]); 


   
  return (
      <>
      <div className=''>
         <label >
             <Select onValueChange={handleSelect} value={selectedRegion}>
               <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select a region" />
               </SelectTrigger>
               <SelectContent>
                  <SelectGroup>
                     <SelectLabel>Regions</SelectLabel>
                     <SelectItem value="All">All</SelectItem>
                     <SelectItem value="Americas">Americas</SelectItem>
                     <SelectItem value="Africa">Africa</SelectItem>
                     <SelectItem value="Asia">Asia</SelectItem>
                     <SelectItem value="Europe">Europe</SelectItem>
                     <SelectItem value="Oceania">Oceania</SelectItem>
                     <SelectItem value="Antarctic">Antarctic</SelectItem>

                  </SelectGroup>
               </SelectContent>
            </Select>
         </label>
         <label className='flex bg-black w-full justify-center px-5 py-2 gap-2'>
            <Input 
               type="text" 
               className='bg-white text-black ' 
               value={inputSearch} 
               onChange={e => setInputSearch(e.target.value)} 
               onKeyDown={e => e.key === 'Enter' && onClickSearch()}
               title='a'/>
            <button className='text-white border-white border py-0.5 px-2 rounded-lg' onClick={() => onClickSearch()}>Search</button>
         </label>
      </div>
      <div className="flex flex-wrap gap-4 justify-center ">
         {loading ? (
            <div>CARGANDO</div>
         ) : currentCountriesList?.length === 0 ? (
            <div>NO HAY RESULTADOS</div>
         ) : (
            currentCountriesList?.map((co, i) => (
               <CountryCard country={co} key={`${i}+${co.name.common}`} />
            ))
         )}
      </div>
      </>
  )
}
