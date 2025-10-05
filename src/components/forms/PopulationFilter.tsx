'use client'

import { useCountriesStore } from '@/store';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '../ui';

export const PopulationFilter = () => {
   const { setMinPopulation, setMaxPopulation, selectedPopulationRange, setSelectedPopulationRange } = useCountriesStore()

   const handlePopulationChange = (value: string) => {
      console.log('Selected population range code:', value);
      
      switch (value) {
         case "all":
            setSelectedPopulationRange('all');
            setMinPopulation(0);
            setMaxPopulation(1000000000);
            break;
         case "less-1m":
            setSelectedPopulationRange('less-1m');
            setMinPopulation(0);
            setMaxPopulation(1000000);
            break;
         case "1m-10m":
            setSelectedPopulationRange('1m-10m');
            setMinPopulation(1000000);
            setMaxPopulation(10000000);
            break;
         case "10m-50m":
            setSelectedPopulationRange('10m-50m');
            setMinPopulation(10000000);
            setMaxPopulation(50000000);
            break;
         case "50m-100m":
            setSelectedPopulationRange('50m-100m');
            setMinPopulation(50000000);
            setMaxPopulation(100000000);
            break;
         case "more-100m":
            setSelectedPopulationRange('more-100m');
            setMinPopulation(100000000);
            setMaxPopulation(1000000000);
            break;
      }
   }

   return (
      <label className='flex justify-center flex-col w-[30%]'>
         <Select onValueChange={handlePopulationChange} value={selectedPopulationRange}>
            <SelectTrigger className="w-full bg-white text-black border border-gray-300 shadow-lg">
               <SelectValue className='text-black placeholder:text-black' placeholder="Population" />
            </SelectTrigger>
            <SelectContent>
               <SelectGroup>
                  <SelectLabel>Population</SelectLabel>
                  <SelectItem value="all">All countries</SelectItem>
                  <SelectItem value="less-1m">Less than 1 million</SelectItem>
                  <SelectItem value="1m-10m">1 – 10 million</SelectItem>
                  <SelectItem value="10m-50m">10 – 50 million</SelectItem>
                  <SelectItem value="50m-100m">50 – 100 million</SelectItem>
                  <SelectItem value="more-100m">More than 100 million</SelectItem>
               </SelectGroup>
            </SelectContent>
         </Select>
      </label>
   )
};