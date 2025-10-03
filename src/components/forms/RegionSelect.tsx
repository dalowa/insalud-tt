'use client'
import { useCountriesStore } from '@/store';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '../ui';


export const RegionSelect = () => {
   const { selectedRegion, setSelectedRegion } = useCountriesStore();
  return (
    <label className='flex justify-center flex-col w-[30%]' >
         <Select onValueChange={e => setSelectedRegion(e)} value={selectedRegion}>
            <SelectTrigger className="w-full bg-white text-black border border-black ">
               <SelectValue placeholder="Region" />
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
