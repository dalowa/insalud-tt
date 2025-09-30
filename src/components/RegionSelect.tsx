import React from 'react'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from './ui/select';

interface RegionSelectProps {
   selectedRegion: string;
   setSelectedRegion: (value: string) => void;
}

export const RegionSelect = ({selectedRegion, setSelectedRegion}:RegionSelectProps) => {

  return (
    <label className='w-full flex justify-center mb-4 flex-col px-5 xl:w-[30%]' >
         <div className='text-start'>Selecciona una Region:</div>
         <Select onValueChange={e => setSelectedRegion(e)} value={selectedRegion}>
            <SelectTrigger className="w-full bg-gray-200 text-black border border-black ">
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
  )
}
