import React from 'react'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from './ui/select';

interface RegionSelectProps {
   selectedRegion: string;
   setSelectedRegion: (value: string) => void;
}

export const RegionSelect = ({selectedRegion, setSelectedRegion}:RegionSelectProps) => {

  return (
    <label >
         <Select onValueChange={e => setSelectedRegion(e)} value={selectedRegion}>
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
  )
}
