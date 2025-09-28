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
  const [minPopulation, setMinPopulation] = useState<number>(0);
  const [maxPopulation, setMaxPopulation] = useState<number>(1000000000);


  const URL_COUNTRIES_API = 'https://restcountries.com/v3.1/all?fields=name,cca3,flags,region,population,capital';

  

   const handleMinPopulation = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = Number(e.target.value);
      
      // Solo actualiza si está en el rango válido
      if (value >= 0 && value <= 1000000000) {
         setMinPopulation(value);
      }
      // Si está fuera del rango, no actualiza el estado (mantiene el valor anterior)
   };

   const handleMaxPopulation = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = Number(e.target.value);
            
            // Solo actualiza si está en el rango válido
            if (value >= 0 && value <= 1000000000) {
               setMaxPopulation(value);
            }
            // Si está fuera del rango, no actualiza el estado (mantiene el valor anterior)
   }

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
      setCurrentCountriesList(allCountries.filter(e => e.name.common.includes(inputSearch.trim())).filter(e => {
         return e.population > minPopulation && e.population < maxPopulation
      }));
    } else {
      setCurrentCountriesList(
        allCountries.filter(country => country.region === value && country.name.common.includes(inputSearch.trim())).filter(e => {
         return e.population > minPopulation && e.population < maxPopulation
      })
      );
    }
  };

   const onClickSearch = () => {
      if(inputSearch.trim() == "" && selectedRegion === "All"){
         setCurrentCountriesList(allCountries.filter(e => {
         return e.population > minPopulation && e.population < maxPopulation
      }))
      }else {
         setCurrentCountriesList(allCountries?.filter(e => e.name.common.includes(inputSearch.trim()) && (selectedRegion == "All"?true:e.region == selectedRegion)).filter(e => {
         return e.population > minPopulation && e.population < maxPopulation
      }))
      }
      
   }



   useEffect(() => {
         requestCountriesList() // Solo hacer la petición
      }, []); // Solo una vez al montar

   useEffect(() => {
      
         setCurrentCountriesList(allCountries)
         /* console.log(cur) */ // Actualizar cuando allCountries cambie
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
         <div className="flex gap-2 items-center w-">
            <label className='flex flex-col gap-2'>
               <p>Min Poblacion:</p>
               <input 
                  type="number" 
                  value={minPopulation} 
                  onChange={e => handleMinPopulation(e)}
                  min={0}
                  max={1000000000}
                  placeholder='Min poblacion'
               />
            </label>
            <label className='flex flex-col gap-2'>
               <p>Max Poblacion:</p>
               <input 
                  type="number" 
                  value={maxPopulation} 
                  onChange={e => handleMaxPopulation(e)}
                  min={0}
                  max={1000000000}
                  placeholder='Min poblacion'
               />
            </label>
            
             
         </div>
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
