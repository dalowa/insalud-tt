'use client'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '../ui';
import { useCountriesStore } from '@/store';

export const SortBySelect = () => {
   const { setOrderByCode } = useCountriesStore()

   return (
         <label className='flex justify-center flex-col w-[30%]' >
            <Select onValueChange={e => setOrderByCode(Number(e))}>
               <SelectTrigger className="w-full bg-white text-black border border-gray-300 shadow-lg ">
                  <SelectValue className='text-black placeholder:text-black placeholder:text-4xl' placeholder="Order by" />
               </SelectTrigger>
               <SelectContent>
                  <SelectGroup>
                     <SelectLabel>Order by</SelectLabel>
                     <SelectItem value="0">Default</SelectItem>
                     <SelectItem value="1">Name (A → Z)</SelectItem>
                     <SelectItem value="2">Name (Z → A)</SelectItem>
                     <SelectItem value="3">Population (Ascending)</SelectItem>
                     <SelectItem value="4">Population (Descending)</SelectItem>
                  </SelectGroup>
               </SelectContent>
            </Select>
         </label>
   )
};
