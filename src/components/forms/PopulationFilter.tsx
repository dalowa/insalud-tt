'use client'

import { useCountriesStore } from '@/store';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '../ui';

export const PopulationFilter = () => {
   const { setMinPopulation, setMaxPopulation } = useCountriesStore()


   const handlePopulationChange = (value: number) => {
      switch (value) {
         case 0:
            setMinPopulation(0);
            setMaxPopulation(1000000000);
            break;
         case 1:
            setMinPopulation(0);
            setMaxPopulation(1000000);
            break;
         case 2:
            setMinPopulation(1000000);
            setMaxPopulation(10000000);
            break;
         case 3:
            setMinPopulation(50000000);
            setMaxPopulation(100000000);
            break;
         case 4:
            setMinPopulation(100000000);
            setMaxPopulation(1000000000);
            break;
      }
   }

   return (
         <label className='flex justify-center flex-col w-[30%]' >
            <Select onValueChange={e => handlePopulationChange(Number(e))}>
               <SelectTrigger className="w-full bg-white text-black border border-gray-300 shadow-lg">
                  <SelectValue className='text-black placeholder:text-black placeholder:text-4xl' placeholder="Population" />
               </SelectTrigger>
               <SelectContent>
                  <SelectGroup>
                     <SelectLabel>Population</SelectLabel>
                     <SelectItem value="0">All countries</SelectItem>
                     <SelectItem value="1">Less than 1 million</SelectItem>
                     <SelectItem value="2">1 – 10 million</SelectItem>
                     <SelectItem value="3">50 – 100 million</SelectItem>
                     <SelectItem value="4">More than 100 million</SelectItem>
                  </SelectGroup>
               </SelectContent>
            </Select>
         </label>
   )
};